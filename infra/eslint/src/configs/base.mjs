import js from '@eslint/js';
import htmlPlugin from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import stylisticPlugin from '@stylistic/eslint-plugin-js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import decoratorPositionPlugin from 'eslint-plugin-decorator-position';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import jsonPlugin from 'eslint-plugin-json';
import nodePlugin from 'eslint-plugin-n';
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests';
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized';
import perfectionistNaturalConfig from 'eslint-plugin-perfectionist/configs/recommended-natural';
import putoutPlugin from 'eslint-plugin-putout';
import regexpPlugin from 'eslint-plugin-regexp';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';
import {
  createRequire,
} from 'node:module';

const require = createRequire(import.meta.url);

const sonarPlugin = require('eslint-plugin-sonar');

const putoutRuleSetup = {
  'putout/single-property-destructuring': 0,
};

const stylisticRuleSetup = {
  '@stylistic/js/indent': ['error', 2],
  '@stylistic/js/lines-around-comment': ['error', {
    afterBlockComment: true,
    beforeBlockComment: true,
    beforeLineComment: true,
  }],
  '@stylistic/js/object-curly-newline': ['error', {
    ExportDeclaration: 'always',
    ImportDeclaration: 'always',
    ObjectExpression: 'always',
    ObjectPattern: {
      multiline: true,
    },
  }],
  '@stylistic/js/object-curly-spacing': ['error', 'always'],
  '@stylistic/js/spaced-comment': ['error', 'always'],
};

const noOnlyTestsRuleSetup = {
  'no-only-tests/no-only-tests': 'error',
};

const jsAndTsConfig = {
  files: [
    '**/*.js',
    '**/*.ts',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.mjs',
    '**/*.cjs',
  ],
  languageOptions: {
    globals: globals.node,
    parser: tsParser,
  },
  plugins: {
    '@stylistic/js': stylisticPlugin,
    '@typescript-eslint': tsPlugin,
    'array-func': arrayFuncPlugin,
    'decorator-position': decoratorPositionPlugin,
    'eslint-comments': eslintComments,
    'import': importPlugin,
    'json': jsonPlugin,
    'n': nodePlugin,
    'no-only-tests': noOnlyTestsPlugin,
    'no-unsanitized': noUnsanitizedPlugin,
    'putout': putoutPlugin,
    'regexp': regexpPlugin,
    'sonar': sonarPlugin,
    'unicorn': unicornPlugin,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
    ...sonarPlugin.configs.recommended.rules,
    ...arrayFuncPlugin.configs.recommended.rules,
    ...eslintComments.configs.recommended.rules,
    ...putoutPlugin.configs.recommended.rules,
    ...decoratorPositionPlugin.configs.ember.rules,
    ...unicornPlugin.configs.recommended.rules,
    ...regexpPlugin.configs.recommended.rules,
    ...noUnsanitizedPlugin.configs.DOM.rules,
    ...jsonPlugin.configs.recommended.rules,
    ...noOnlyTestsRuleSetup,
    ...putoutRuleSetup,
    ...stylisticRuleSetup,
  },
};

const htmlConfig = {
  files: ['**/*.html'],
  languageOptions: {
    parser: htmlParser,
  },
  plugins: {
    html: htmlPlugin,
  },
  rules: htmlPlugin.configs.recommended.rules,
};

export default [
  jsAndTsConfig,
  htmlConfig,
  perfectionistNaturalConfig,
];
