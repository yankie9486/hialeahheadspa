// @ts-check
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  // 1. Global Ignores
  {
    ignores: ['assets/*'],
  },
  // 2. Prettier configuration block
  {
    plugins: {
      // This defines the "prettier" namespace for rules
      prettier: eslintPluginPrettier,
    },
    rules: {
      // This activates the rule now that ESLint knows what "prettier" is
      'prettier/prettier': 'error',

      // Pulls in the recommended rules from the plugin
      ...(eslintPluginPrettier?.configs?.recommended?.rules ?? {}),

      // Pulls in the config that turns off conflicting ESLint rules
      ...eslintConfigPrettier.rules,

      'vue/multi-word-component-names': 'off',
    },
  },
]);
