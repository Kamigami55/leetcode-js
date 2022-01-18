module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
  },
  env: {
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'no-constant-condition': 'off', // Allow for while(true) loops
    'no-unused-vars': 'off', // Allow unused variables
    'no-undef': 'off', // Allow undefined
  },
}
