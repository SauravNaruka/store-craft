module.exports = {
  resetMocks: true,
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/__mocks__/**',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/.next/**',
    '!**/*.config.js',
    '!.lintstagedrc.js',
    '!lighthouserc.js',
    '!<rootDir>/src/pages/_document.tsx',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@generated/(.*)$': '<rootDir>/generated/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@LocalTypes/(.*)$': '<rootDir>/src/types/$1',

    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets: ['next/babel']}],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    '/.next/',
  ],
  setupFiles: ['<rootDir>/jest.env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
