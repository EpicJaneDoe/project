// Resolver temporal para la verificación local: mapea "react-router/dom" al archivo físico.
const path = require('path');
module.exports = (request, options) => {
  if (request === 'react-router/dom') {
    return require.resolve(
      path.join(options.rootDir, 'node_modules', 'react-router', 'dist', 'development', 'dom-export.js')
    );
  }
  return options.defaultResolver(request, options);
};
