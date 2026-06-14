import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    // Enforce the < 100-line-per-file constraint across source modules.
    rules: {
      "max-lines": ["warn", { max: 100, skipBlankLines: true, skipComments: true }],
    },
  },
  {
    // Type-only imports/exports MUST use `import type` / `export type`
    // (mirrors provue-studio). consistent-type-exports needs type info, so
    // enable the project service for source files.
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
          disallowTypeAnnotations: true,
        },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
    },
  },
  {
    // Tests and config files are exempt from the line limit.
    files: ["**/*.test.{ts,tsx}", "**/*.config.{ts,mjs}", "vitest.setup.ts"],
    rules: { "max-lines": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "docs/**"]),
]);

export default eslintConfig;
