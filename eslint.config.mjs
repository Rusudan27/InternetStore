import withNuxt from './.nuxt/eslint.config.mjs';
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default withNuxt([
 
  js.configs.recommended,
  vue.configs["vue3-recommended"],
  ts.configs.recommended,
  prettierConfig,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    plugins: {
      vue,
      "@typescript-eslint": ts,
      prettier: prettierPlugin
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: true }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" }
      ],

      "vue/no-v-html": "error",
      "vue/multi-word-component-names": "off",
      "vue/attribute-hyphenation": ["error", "always"],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/require-default-prop": "off",

      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "none",
          printWidth: 100
        }
      ]
    }
  }
]);
