'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
    theme: 'dark';
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark' });

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.removeItem('theme');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme: 'dark' }}>
            {children}
        </ThemeContext.Provider>
    );
}
