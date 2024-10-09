import ThemeToggle from "@/components/editor/navigation/ThemeToggle";
import React, { useEffect } from "react";

const TopNavBar = ({ themeMode, setThemeMode, setEditorTheme }) => {
    useEffect(() => {
        const root = window.document.documentElement;

        const updateTheme = () => {
            root.classList.remove("light", "dark");

            let currentTheme;
            if (themeMode === "system") {
                currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            } else {
                currentTheme = themeMode;
            }

            root.classList.add(currentTheme);

            if (currentTheme === "dark") {
                setEditorTheme('vs-dark');
            } else {
                setEditorTheme('light');
            }

            localStorage.setItem("theme", currentTheme);
        };

        updateTheme();

        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = () => {
            if (themeMode === "system") {
                updateTheme();
            }
        };

        mediaQueryList.addEventListener("change", listener);

        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, [themeMode, setEditorTheme]);

    return (
        <nav className="p-2 border shadow-sm">
            <div className="container flex items-center justify-between mx-auto">
                <h1 className="text-2xl font-bold">Code Shum</h1>
                {/* Pass themeMode and setThemeMode to ThemeToggle */}
                <ThemeToggle themeMode={themeMode} setThemeMode={setThemeMode} />
            </div>
        </nav>
    );
};

export default TopNavBar;
