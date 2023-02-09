const nextJest = require('next/jest');
const createJestConfig = nextJest({dir: '.'})
const customJestConfig = {
    testEnvrionment: 'node',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
}
module.exports = createJestConfig(customJestConfig)