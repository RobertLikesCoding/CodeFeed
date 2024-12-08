module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional: Setup files for test initialization
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel to transpile JavaScript
    '^.+\\.(ts|tsx)$': 'babel-jest',
    // '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  setupFilesAfterEnv: ['<rootDir>/setup.jest.ts'],
};

