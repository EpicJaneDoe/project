// Configuración temporal de Jest solo para verificar el nuevo botón en local.
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ] }],
  },
  moduleNameMapper: { '\\.(css|jpg|jpeg|png|gif|svg)$': '<rootDir>/styleStub.cjs' },
  // react-router-dom v7 exporta "react-router/dom" vía "exports", no soportado por jest-resolve 27 (CRA).
  resolver: '<rootDir>/jest.resolver.cjs',
  testMatch: ['<rootDir>/src/backToMenu.test.js'],
};
