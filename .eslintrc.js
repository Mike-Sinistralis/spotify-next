const path = require('path');
const getAliases = require('./import-aliases');

module.exports = {
    root: true,
    extends: [
      'airbnb',
      'plugin:@next/next/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['**/node_modules/*'],
    plugins: [
      '@typescript-eslint',
      'file-progress',
    ],
    settings: {
      'import/resolver': {
        node: { extensions: ['.mjs'] },
        alias: {
          map: getAliases([__dirname, '..']),
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    parserOptions: {
      ecmaVersion: 2022,
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    env: {
      node: true,
      es6: true,
      browser: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    rules: {
      'max-len': [2, {
        code: 160,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
      }],
      // Allow JSX inside of .tsx files
      'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],

      // Required for eslint-plugin-file-progress
      'file-progress/activate': 1,

      // Typescript Rules Tweaks
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-use-before-define': 'off', // See: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
      '@typescript-eslint/no-use-before-define': 'off',
      'no-shadow': 'off', // See: https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
      '@typescript-eslint/no-shadow': ['error'],

      // Intentional Disables
      'jsx-a11y/no-autofocus': 0,
      'no-lone-blocks': 0, // This prevents jsx comments
      'import/prefer-default-export': 0, // Promotes inconsistent workflows that need refactored when another export is added
      'react/jsx-props-no-spreading': 0,
      'react/button-has-type': 0, // We can enforce this via proptypes while enabling dynamic types
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,

      'import/no-cycle': 0, // this is an expensive lint rule, so it's disabled by default. We might want to make a more strict lint config for the future
      'react/forbid-prop-types': 0, // typescript, no longer useful
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: [path.resolve(__dirname, '../tsconfig.json')],
        },
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        rules: {
          '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
              allowExpressions: true,
            },
          ],
          'react/require-default-props': 0,
          'react/prop-types': 0,
          'no-unused-vars': 0,
          '@typescript-eslint/no-unused-vars': 'error',
          'import/named': 0,
          'import/namespace': 0,
          'import/default': 0,
          '@typescript-eslint/no-misused-promises': 0,
        },
      },
      {
        files: ['**/ui/**/*.jsx'],
        rules: {
          'import/prefer-default-export': 2, // Components should only export 1 main item with some optional enums so this is fine here.
        },
      },
      {
        files: ['**/*.test.jsx?'],
        rules: {

        },
      },
      {
        files: ['**/config/**/*.js?'],
        rules: {
          'import/no-extraneous-dependencies': 0,
        },
      },
    ],
  };
