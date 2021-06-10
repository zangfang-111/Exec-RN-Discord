module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    indent: ['error', 4],
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'no-redeclare': 1,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
