import { useEffect, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export const THEME_STORAGE_KEY = "theme";
const THEME_COLORS = { light: "#f5f6fa", dark: "#1a1a24" } as const;

/** Keeps <meta name="theme-color"> in sync with the resolved theme. */
function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && resolvedTheme) {
      meta.setAttribute(
        "content",
        resolvedTheme === "dark" ? THEME_COLORS.dark : THEME_COLORS.light,
      );
    }
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey={THEME_STORAGE_KEY}
    >
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}
