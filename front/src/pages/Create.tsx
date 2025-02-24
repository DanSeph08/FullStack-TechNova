import { Box, Button, Card, Grid2, Typography } from "@mui/material";
import { prefersDarkMode } from "../styles/theme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Formik } from "formik";
import AppTextField from "../components/AppTextField";
import { useCreateActividadMutation } from "../api/actividades";
import { Actividad } from "../interfaces/actividades";
import toast from "react-hot-toast";
import { schemaActividad } from "../utils/schemaActividad";
import { useNavigate } from "react-router-dom";

const Create = () => {
  //#region Querys
  const [createAct] = useCreateActividadMutation();
  //#endregion

  //#regeion initialValues, Navigate
  const navigate = useNavigate();

  const initialValues = {
    usuario: "",
    proyecto: "",
    compañía: "",
    tipo: "",
    descripción: "",
    minutos: 0,
    fecha: "",
    Equipo: "",
  };
  //#endregion

  //#region HandleCreate
  const handleCreate = async (values: Actividad) => {
    try {
      await createAct(values).unwrap();
      toast.success("Actividad creada correctamente");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //#endregion

  return (
    <>
      <div className="m-5 flex justify-center items-center">
        <Card
          sx={{
            width: "90vw",
            maxWidth: "1200px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2, p: 2, placeItems: "center" }}>
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
                <AddCircleIcon sx={{ color: "white" }} />
              </Box>
              <h1 className="text-2xl font-bold text-center text-primary.main m-5">Crear actividad</h1>
            </Box>
            <Button variant="contained" color={prefersDarkMode ? "primary" : "secondary"} href="/" sx={{ borderRadius: "20px" }}>
              <Typography>Regresar</Typography>
            </Button>
          </Box>

          <Card
            sx={{
              borderRadius: "20px",
              backgroundColor: "background.default",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "85%",
              margin: "auto",
              p: 2,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            <Formik
              initialValues={initialValues}
              enableReinitialize={true}
              validationSchema={schemaActividad}
              onSubmit={(values) => handleCreate(values)}
            >
              {({ values, errors, handleSubmit, handleChange, handleBlur, touched }) => {
                return (
                  <>
                    <h1 className="text-2xl font-bold text-center text-primary.main m-7">Crear una nueva actividad</h1>
                    <Grid2
                      sx={{
                        flexWrap: "wrap",
                        gap: "1rem",
                        width: "90%",
                        display: "flex",
                        justifyContent: "space-between",
                        p: 1,
                      }}
                    >
                      <Grid2 sx={{ width: "42.5%" }}>
                        <Grid2>
                          <h5>Nombre</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            sx={{ width: "100%", m: 2 }}
                            fullWidth
                            type="text"
                            name="usuario"
                            required
                            label={"Nombre"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.usuario}
                            helperText={touched.usuario && errors.usuario}
                            error={Boolean(touched.usuario && errors.usuario)}
                          />
                        </Grid2>

                        <Grid2>
                          <h5>Proyecto</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="text"
                            name="proyecto"
                            required
                            label={"Proyecto"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.proyecto}
                            helperText={touched.proyecto && errors.proyecto}
                            error={Boolean(touched.proyecto && errors.proyecto)}
                          />
                        </Grid2>
                      </Grid2>

                      <Grid2 sx={{ width: "42.5%" }}>
                        <Grid2>
                          <h5>Compañía</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="text"
                            name="compañía"
                            required
                            label={"Compañía"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.compañía}
                            helperText={touched.compañía && errors.compañía}
                            error={Boolean(touched.compañía && errors.compañía)}
                          />
                        </Grid2>

                        <Grid2>
                          <h5>Tipo</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="text"
                            name="tipo"
                            required
                            label={"Tipo"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.tipo}
                            helperText={touched.tipo && errors.tipo}
                            error={Boolean(touched.tipo && errors.tipo)}
                          />
                        </Grid2>
                      </Grid2>

                      <Grid2 sx={{ width: "42.5%" }}>
                        <Grid2>
                          <h5>Descripción</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="text"
                            name="descripción"
                            required
                            label={"Descripción"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.descripción}
                            helperText={touched.descripción && errors.descripción}
                            error={Boolean(touched.descripción && errors.descripción)}
                          />
                        </Grid2>

                        <Grid2>
                          <h5>Minutos</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="number"
                            name="minutos"
                            required
                            label={"Minutos"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.minutos}
                            helperText={touched.minutos && errors.minutos}
                            error={Boolean(touched.minutos && errors.minutos)}
                          />
                        </Grid2>
                      </Grid2>

                      <Grid2 sx={{ width: "42.5%" }}>
                        <Grid2>
                          <h5>Fecha</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="text"
                            name="fecha"
                            required
                            label={"Fecha"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.fecha}
                            helperText={touched.fecha && errors.fecha}
                            error={Boolean(touched.fecha && errors.fecha)}
                          />
                        </Grid2>

                        <Grid2>
                          <h5>Equipo</h5>
                        </Grid2>
                        <Grid2>
                          <AppTextField
                            fullWidth
                            sx={{ width: "100%", m: 2 }}
                            type="text"
                            name="Equipo"
                            required
                            label={"Equipo"}
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              handleChange(e);
                            }}
                            value={values.Equipo}
                            helperText={touched.Equipo && errors.Equipo}
                            error={Boolean(touched.Equipo && errors.Equipo)}
                          />
                        </Grid2>
                      </Grid2>
                    </Grid2>

                    <Grid2 sx={{ alignItems: "center", justifyContent: "center" }}>
                      <Button
                        sx={{
                          ml: 2,
                          mt: 2,
                          alignItems: "center",
                          justifyContent: "center",
                          color: prefersDarkMode ? "" : "",
                          borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
                          bgcolor: prefersDarkMode ? "" : "secondary.main",
                        }}
                        onClick={() => handleSubmit()}
                        variant="contained"
                      >
                        {"Crear"}
                      </Button>
                    </Grid2>
                  </>
                );
              }}
            </Formik>
          </Card>
        </Card>
      </div>
    </>
  );
};
export default Create;
