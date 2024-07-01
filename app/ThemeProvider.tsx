// app/ThemeProvider.tsx

"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export function NextThemeProvider({ children }:{children:ReactNode}) {
  return <NextThemesProvider attribute="class"> {children} </NextThemesProvider>;
}
