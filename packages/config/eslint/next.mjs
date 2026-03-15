import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

/**
 * Shared ESLint flat-config for Next.js apps in the monorepo.
 * @param {string} baseDirectory - `__dirname` of the consuming eslint.config.mjs
 * @returns {import("eslint").Linter.Config[]}
 */
export function createNextConfig(baseDirectory) {
  const compat = new FlatCompat({ baseDirectory });

  return tseslint.config(
    ...compat.extends("next/core-web-vitals"),
    ...tseslint.configs.recommended,
    ...compat.extends("prettier"),
    {
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
      },
    },
    {
      ignores: [".next/", "node_modules/", "out/"],
    },
  );
}
