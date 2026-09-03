// .eslintrc.js (flat config with TypeScript and Next.js)

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat allows using old-style "extends" in new flat config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom overrides and ignores
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // React 18 and Next.js don't require React in scope
      "react/react-in-jsx-scope": "off",

      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Optional: enforce Prettier formatting (if using Prettier)
      "prettier/prettier": ["warn"],
    },
  },
];

export default eslintConfig;
