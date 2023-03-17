module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended', // Add this line
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};