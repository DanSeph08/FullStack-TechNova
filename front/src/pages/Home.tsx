import { Box, Button, Card, Grid2, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useGetActividadesQuery } from "../api/actividades";
import Cards from "../components/Cards";
import { useState } from "react";
import { StyledPagination } from "../components/StyledComponents";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { prefersDarkMode } from "../styles/theme";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  //#region Query y UseState
  const { data, isLoading } = useGetActividadesQuery();
  const [paginaSeleccionada, setPaginaSeleccionada] = useState(1);
  //#endregion

  // Estados para los filtros
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroProyecto, setFiltroProyecto] = useState("");
  const [ordenMinutos, setOrdenMinutos] = useState("");
  //#endregion

  //#region Calculo de paginado
  const itemsPorPagina = 12;
  const indiceInicialPaginado = (paginaSeleccionada - 1) * itemsPorPagina;
  const indiceFinalPaginado = indiceInicialPaginado + itemsPorPagina;
  //#endregion

  //#region Cambiar paginado
  const handleChangeCambiarPaginado = (_: React.ChangeEvent<unknown>, currentPageNo: number) => setPaginaSeleccionada(currentPageNo);
  //#endregion

  //#region Filtrar y ordenar datos
  const actividadesFiltradas = data
    ?.filter(
      (actividad) =>
        actividad?.usuario?.toLowerCase().includes(filtroNombre.toLowerCase()) &&
        actividad?.proyecto?.toLowerCase().includes(filtroProyecto.toLowerCase())
    )
    .sort((a, b) => {
      if (!ordenMinutos) return 0; // No ordenar si no hay criterio
      return ordenMinutos === "asc" ? a.minutos - b.minutos : b.minutos - a.minutos;
    });

  const actividadesPaginadas = actividadesFiltradas?.slice(indiceInicialPaginado, indiceFinalPaginado);
  //#endregion

  return (
    <div className="m-7">
      {isLoading ? (
        <CircularProgress />
      ) : data?.[0] ? (
        <>
          <Card
            sx={{
              width: "90%",
              padding: "1rem",
              borderRadius: "20px",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2, p: 2, pb: 5, placeItems: "center" }}>
              <Box sx={{ display: "flex", placeItems: "center" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "10%",
                    backgroundColor: prefersDarkMode ? "primary.main" : "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArticleOutlinedIcon sx={{ color: "white" }} />
                </Box>
                <h1 className="text-2xl font-bold text-center text-primary.main m-5">Lista de Actividades</h1>
              </Box>
              <Button variant="contained" color={prefersDarkMode ? "primary" : "secondary"} href="/crear" sx={{ borderRadius: "20px" }}>
                <Typography>Crear nueva actividad</Typography>
              </Button>
            </Box>

            {/* Sección de Filtros */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2, p: 2, pb: 5 }}>
              <TextField
                label="Filtrar por nombre"
                variant="standard"
                size="small"
                value={filtroNombre}
                onChange={(e) => setFiltroNombre(e.target.value)}
                sx={{
                  width: "30%",
                  "& label": { color: prefersDarkMode ? "white" : "black" },
                  "& label.Mui-focused": { color: prefersDarkMode ? "primary.main " : "secondary.main" },
                  "& .MuiInput-underline:after": { borderBottomColor: prefersDarkMode ? "primary.main " : "secondary.main" },
                }}
              />
              <Select
                displayEmpty
                value={filtroProyecto}
                onChange={(e) => setFiltroProyecto(e.target.value)}
                size="small"
                variant="outlined"
                sx={{
                  width: "30%",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
                  },
                }}
              >
                <MenuItem value="">Todos</MenuItem>
                {Array.from(new Set(data?.map((actividad) => actividad.proyecto))).map((proyecto) => (
                  <MenuItem key={proyecto} value={proyecto}>
                    {proyecto}
                  </MenuItem>
                ))}
              </Select>
              <Select
                displayEmpty
                value={ordenMinutos}
                onChange={(e) => setOrdenMinutos(e.target.value)}
                size="small"
                variant="outlined"
                sx={{
                  width: "30%",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
                  },
                }}
              >
                <MenuItem value="">Ordenar por minutos</MenuItem>
                <MenuItem value="asc">Ascendente</MenuItem>
                <MenuItem value="desc">Descendente</MenuItem>
              </Select>
            </Box>

            <Grid2 container spacing={4} justifyContent="center">
              {actividadesPaginadas?.map((data, key) => <Cards {...data} key={key} />)}
            </Grid2>

            <Stack alignItems="center" margin="1rem auto">
              <StyledPagination
                color="secondary"
                variant="text"
                shape="rounded"
                onChange={handleChangeCambiarPaginado}
                count={Math.ceil(data?.length / 12)}
                page={paginaSeleccionada}
              />
            </Stack>
          </Card>
        </>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2, p: 2, pb: 5, placeItems: "center" }}>
          <Box sx={{ display: "flex", placeItems: "center" }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "10%",
                backgroundColor: prefersDarkMode ? "primary.main" : "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Box>
            <h1 className="text-2xl font-bold text-center text-primary.main m-5">No hay datos</h1>
          </Box>
          <Button variant="contained" color={prefersDarkMode ? "primary" : "secondary"} href="/" sx={{ borderRadius: "20px" }}>
            <Typography>Recargar</Typography>
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Home;
