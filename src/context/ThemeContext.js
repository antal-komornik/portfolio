import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Ellenőrizzük a böngésző preferált témáját
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        // Figyelőt adunk hozzá a témaváltozáshoz
        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addListener(handler);

        // Eltávolítjuk a figyelőt, amikor a komponens unmount-ol
        return () => mediaQuery.removeListener(handler);
    }, []);

    useEffect(() => {
        // Frissítjük a Bootstrap témát
        document.body.classList.toggle('bg-dark', isDarkMode);
        document.body.classList.toggle('text-light', isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);