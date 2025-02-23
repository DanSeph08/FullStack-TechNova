import { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { prefersDarkMode } from "../styles/theme";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* Barra de navegación */}
      <AppBar position="static" sx={{ bgcolor: prefersDarkMode ? "primary.main" : "secondary.main", height: "50px" }}>
        <Toolbar>
          <Typography variant="h1" component={Link} to="/" sx={{ textDecoration: "none", color: "white", mb: 2 }}>
            Tech Nova
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container component="main" sx={{ py: 2, minWidth: "100%", height: "100%" }}>
        {children}
      </Container>

      {/* Footer opcional */}
      <Box component="footer" sx={{ textAlign: "center", position: "inherit", bottom: 0, width: "100%", bgcolor: prefersDarkMode ? "primary.main" : "secondary.main", color: "white", p: 1, marginTop: "auto" }}>
        <Typography variant="body2">&copy; 2025 - Todos los derechos reservados</Typography>
      </Box>
    </Box>
  );
};
