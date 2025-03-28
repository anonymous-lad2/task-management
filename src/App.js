import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Container, IconButton, Typography } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ textAlign: "center", py: 4 }}>
        <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ mb: 2 }}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Typography variant="h4">Task Manager</Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
