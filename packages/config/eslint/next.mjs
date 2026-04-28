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
  
  return [
    ...tseslint.config(
    ...compat.extends("next/core-web-vitals"),
    ...tseslint.configs.recommended,
    ...compat.extends("prettier"),

    {
      ignores: [
        ".next/",
        "node_modules/",
        "out/",
      ],
    },

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
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parserOptions: {
          project: tsconfigPath,
          tsconfigRootDir: baseDirectory,
        },
      },
    },

    {
      files: ["next-env.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },

    {
      files: ["next.config.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  )
];
}
