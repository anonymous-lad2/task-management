import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#f4f6f8", paper: "#fff" },
  },
  typography: { fontFamily: "Poppins, sans-serif" },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#b0b0b0" },
  },
  typography: { fontFamily: "Poppins, sans-serif" },
});
