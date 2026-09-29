// src/index.ts
import express, { Request, Response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'SISTEMAS'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error conectando a la base de datos:', err);
        process.exit(1);
    } else {
        console.log('✅ Conectado a la base de datos SISTEMAS');
    }
});

app.use(cors());
app.use(express.json());

interface Cliente {
    Cedula: string;
    Nombre: string;
    Apellido: string;
    Direccion: string;
    Genero: string;
}

app.post('/create', (req: Request, res: Response) => {
    const { Cedula, Nombre, Apellido, Direccion, Genero }: Cliente = req.body;
    if (!Cedula || !Nombre || !Apellido || !Direccion || !Genero) {
        return res.status(400).send('⚠️ Todos los campos son requeridos');
    }

    const query = 'INSERT INTO cliente (Cedula, Nombre, Apellido, Direccion, Genero) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Cedula, Nombre, Apellido, Direccion, Genero], (err) => {
        if (err) {
            console.error('❌ Error en la inserción:', err);
            return res.status(500).send('Error al registrar el cliente');
        }
        res.status(201).send('✅ Cliente registrado satisfactoriamente');
    });
});

app.get('/cliente', (req: Request, res: Response) => {
    db.query('SELECT * FROM cliente', (err, result) => {
        if (err) {
            console.error('❌ Error al obtener clientes:', err);
            return res.status(500).send('Error al obtener los clientes');
        }
        res.json(result);
    });
});

app.put('/update/:cedula', (req: Request, res: Response) => {
    const { Nombre, Apellido, Direccion, Genero }: Omit<Cliente, 'Cedula'> = req.body;
    const { cedula } = req.params;

    const query = 'UPDATE cliente SET Nombre = ?, Apellido = ?, Direccion = ?, Genero = ? WHERE Cedula = ?';
    db.query(query, [Nombre, Apellido, Direccion, Genero, cedula], (err, result: any) => {
        if (err) {
            console.error('❌ Error en la actualización:', err);
            return res.status(500).send('Error al actualizar el cliente');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('⚠️ Cliente no encontrado');
        }
        res.status(200).send('✅ Cliente actualizado satisfactoriamente');
    });
});

app.delete('/delete/:cedula', (req: Request, res: Response) => {
    const { cedula } = req.params;
    const query = 'DELETE FROM cliente WHERE Cedula = ?';
    db.query(query, [cedula], (err, result: any) => {
        if (err) {
            console.error('❌ Error en la eliminación:', err);
            return res.status(500).send('Error al eliminar el cliente');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('⚠️ Cliente no encontrado');
        }
        res.status(200).send('✅ Cliente eliminado satisfactoriamente');
    });
});

app.listen(3001, () => {
    console.log('🚀 Servidor corriendo en http://localhost:3001');
});