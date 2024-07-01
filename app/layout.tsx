// app/layout.tsx


import type { Metadata } from "next";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/app/lib/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from "./NavBar";
import AuthProvider from "./auth/AuthProvider";
import { NextThemeProvider } from "./ThemeProvider";

export const metadata: Metadata = {
  title: "Randisko",
  description: "Viac ako zoznamka ...",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html suppressHydrationWarning lang="sk">
      <body>
        <AuthProvider>
          <NextThemeProvider>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar />
                {children}
              </MuiThemeProvider>
            </AppRouterCacheProvider>
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
