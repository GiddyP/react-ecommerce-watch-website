import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";



// color design tokens export
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            primary: {
                100: "#fcfcfc",
                200: "#f9f9f9",
                300: "#f5f5f5",
                400: "#f2f2f2",
                500: "#efefef",
                600: "#bfbfbf",
                700: "rgba(87, 86, 86, 0.2)",
                800: "#606060",
                900: "#303030"
            },
            greenAccent: {
                100: "#d4ebe9",
                200: "#aad8d2",
                300: "#7fc4bc",
                400: "#55b1a5",
                500: "#d20b0b",
                600: "#227e72",
                700: "#195e56",
                800: "#113f39",
                900: "#081f1d"
            },
            secondary: {
                100: "#fae2dc",
                200: "#f5c5b9",
                300: "#f1a997",
                400: "#ec8c74",
                500: "#e76f51",
                600: "#b95941",
                700: "#8b4331",
                800: "#5c2c20",
                900: "#fae2dc",
            },
            blueAccent: {
                100: "#d4dadd",
                200: "#a8b5ba",
                300: "#7d909886",
                400: "#516b75",
                500: "#264653",
                600: "#1e3842",
                700: "#3f3d3d87",
                800: "#0f1c21",
                900: "#6b5a2f",
            },
            yellowAccent: {
                100: "#fbf3e1",
                200: "#f6e7c3",
                300: "#f2dca6",
                400: "#edd088",
                500: "#e9c46a",
                600: "#ba9d55",
                700: "#8c7640b5",
                800: "#f68a10",
                900: "#2f2715"
            },
            redAccent: {
                100: "#fdecdf",
                200: "#fbdac0",
                300: "#f8c7a0",
                400: "#f6b581",
                500: "#f4a261",
                600: "#a44c03",
                700: "#92613a",
                800: "#624127",
                900: "#312013"
            },
        }
        : {
            primary: {
                100: "#151515",
                200: "#606060",
                300: "#8f8f8f",
                400: "#bfbfbf",
                500: "#efefef",
                600: "#f2f2f2",
                700: "rgba(231, 227, 227, 0.5)",
                800: "#fbfbfe",
                900: "#efefef",
            },
            greenAccent: {
                100: "#081f1d",
                200: "#113f39",
                300: "#7fc4bc",
                400: "#55b1a5",
                500: "#d20b0b",
                600: "#55b1a5",
                700: "#8b988f",
                800: "#1da435",
                900: "#d4ebe9",
            },
            secondary: {
                100: "#2e1610",
                200: "#5c2c20",
                300: "#8b4331",
                400: "#b95941",
                500: "#e76f51",
                600: "#ec8c74",
                700: "#f1a997",
                800: "#f5c5b9",
                900: "#fae2dc",
            },
            blueAccent: {
                100: "#080e11",
                200: "#0f1c21",
                300: "#172a32",
                400: "#1e3842",
                500: "#264653",
                600: "#516b75",
                700: "rgba(188, 184, 184, 0.5)",
                800: "#0f1c21",
                900: "#6b5a2f",
            },
            yellowAccent: {
                100: "#2f2715",
                200: "#5d4e2a",
                300: "#8c7640",
                400: "#ba9d55",
                500: "#e9c46a",
                600: "#edd088",
                700: "#ecaf73",
                800: "#0e0a02",
                900: "#fbf3e1",
            },
            redAccent: {
                100: "#312013",
                200: "#624127",
                300: "#92613a",
                400: "#fa780e",
                500: "#6f3d14",
                600: "#a44c03",
                700: "#f8c7a0",
                800: "#fbdac0",
                900: "#fdecdf",
            },
        }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[300],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.primary[700],
                        main: colors.primary[500],
                        light: colors.primary[100],
                    },
                    background: {
                        default: "#151414",
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.primary[700],
                        main: colors.primary[500],
                        light: colors.primary[100],
                    },
                    background: {
                        default: colors.primary[900],
                    },
                }),
        },
        typography: {
            fontFamily: ['Poppins', "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ['Fredericka the Great', "cursive"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Fredericka the Great', "cursive"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Fredericka the Great', "cursive"].join(","),
                fontSize: 21,
            },
            h4: {
                fontFamily: ['Fredericka the Great', "cursive"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Fredericka the Great', "cursive"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Poppins', "sans-serif"].join(","),
                fontSize: 16,
            },
            h7: {
                fontFamily: ['Poppins', "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    // The initail mode is dark mode 
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(
        () => createTheme(themeSettings(mode)
        ),
        [mode]
    );
    return [theme, colorMode];
};