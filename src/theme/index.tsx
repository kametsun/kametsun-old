import { extendConfig, extendTheme } from "@yamada-ui/react";

const theme = extendTheme({
  themeSchemes: {
    pink: {
      semantics: {
        colors: { primary: "pink.500" },
        colorSchemes: { primary: "pink" },
      },
    },
    purple: {
      semantics: {
        colors: { primary: "purple.500" },
        colorSchemes: { primary: "purple" },
      },
    },
    green: {
      semantics: {
        colors: { primary: "green.500" },
        colorSchemes: { primary: "green" },
      },
    },
  },
})();

export const config = extendConfig({
  initialThemeScheme: "pink",
});

export default theme;
