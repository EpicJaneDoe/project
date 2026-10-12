const base = require('./jest.verify.cjs');
module.exports = { ...base, testMatch: ['<rootDir>/src/__diag__/diag.test.js'] };
