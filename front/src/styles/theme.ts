import { createTheme } from "@mui/material/styles";

export const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const theme = createTheme({
  palette: {
    mode: prefersDarkMode ? "dark" : "light",
    primary: { main: "#007BFF" },
    secondary: { main: "#6A00F4" },
    background: {
      default: prefersDarkMode ? "#0D1117" : "#F5F5F5",
      paper: prefersDarkMode ? "#161B22" : "#FFFFFF",
    },
    text: {
      primary: prefersDarkMode ? "#F5F5F5" : "#1E1E1E",
      secondary: prefersDarkMode ? "#007BFF" : "#6A00F4",
    },
  },
  typography: {
    fontFamily: "Poppins",
      h1: { fontSize: "2.5rem", fontWeight: 600 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 600 },
    h6: { fontSize: "1rem", fontWeight: 600 },
  },
});

export default theme;
