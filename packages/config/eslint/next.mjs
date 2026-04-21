import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import tseslint from "typescript-eslint";

/**
 * Shared ESLint flat-config for Next.js apps in the monorepo.
 * @param {string} baseDirectory - `__dirname` of the consuming eslint.config.mjs
 * @returns {import("eslint").Linter.Config[]}
 */
export function createNextConfig(baseDirectory) {
  const compat = new FlatCompat({ baseDirectory });
  const tsconfigPath = path.join(baseDirectory, "tsconfig.json");
  const configs = tseslint.config(
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

  return configs.map((config) => ({
    ...config,
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        ...config.languageOptions?.parserOptions,
        project: tsconfigPath,
        tsconfigRootDir: baseDirectory,
      },
    },
  }));
}
