/* eslint-disable */
export default {
  displayName: 'placeholder-todo-data-access-todo-infrastructure',
  preset: '../../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../coverage/libs/placeholder/todo/data-access/todo-infrastructure',
};
