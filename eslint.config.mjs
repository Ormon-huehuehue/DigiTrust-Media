import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Ignore files globally
  {
    ignores: [
      "./src/app/hooks/use-toast.ts",
      "./src/components/magicui/animated-grid-pattern.tsx",
      "./src/components/ui/apple-cards-carousel.tsx",
      "./src/hooks/use-outside-click.tsx",
      "./src/components/ui/infinite-moving-cards.tsx"
    ],
  },

  // ✅ Extend from Next.js config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Plugin config
  {
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
