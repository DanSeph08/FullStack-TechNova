import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { MainLayout } from "./components/MainLayout";
import theme from "./styles/theme";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    // ThemeProvider y CssBaseline componentes MUI para estilos globales
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Router para la creacion de rutas */}
      <Router>
        {/* Layout para la navegacion y vista de la app */}
        <MainLayout>
            <Toaster
              toastOptions={{ duration: 4000, style: { backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary } }}
            />
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Home />} />
            <Route path="/crear" element={<Create />} />
            <Route path="/verDetalle" element={<Detail />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;