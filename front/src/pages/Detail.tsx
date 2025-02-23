import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import { useDeleteActividadMutation, useGetActividadByIdQuery, useUpdateActividadMutation } from "../api/actividades";
import { useSelector } from "react-redux";
import { prefersDarkMode } from "../styles/theme";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Actividad } from "../interfaces/actividades";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditableTableCell from "../components/EditableTableCell";
import CheckIcon from "@mui/icons-material/Check";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "../components/EditModal";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  //#region useNavigate and useSelector
  const navigate = useNavigate();
  const idActividad = useSelector((state: { actividades: { idActividad: string } }) => state.actividades.idActividad);
  //#endregion

  //#region useState
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [updateData, setUpdateData] = useState<Record<string, string | number>>({});
  //#endregion

  //#region Querys
  const { data, isLoading, refetch } = useGetActividadByIdQuery({ id: idActividad });
  const [updateActividad, { isLoading: isUpdate }] = useUpdateActividadMutation();
  const [deleteActividad] = useDeleteActividadMutation();
  //#endregion

  //#region Handles
  const handleDeleteModal = () => {
    setOpenDelete(true);
  };

  const handleEliminar = async () => {
    try {
      await deleteActividad(idActividad).unwrap();
      toast.success("Actividad eliminada correctamente");
      navigate(-1);
    } catch (error) {
      toast.error("Error al eliminar la actividad");
      console.log(error);
    }
  };

  const handleEditar = () => {
    setOpenModal(true);
  };
  //#endregion

  //#region Funcion Actualizar
  const actualizarActividad = async () => {
    try {
      await updateActividad(updateData).unwrap();
      toast.success("Actividad actualizada correctamente");
      refetch();
      setOpenModal(false);
    } catch (error) {
      toast.error("Error al actualizar la actividad");
      console.log(error);
    }
  };
  //#endregion

  //#region const
  const campos: (keyof Actividad)[] = ["proyecto", "compañía", "tipo", "descripción", "minutos", "fecha", "Equipo"];
  //#endregion

  return (
    <>
      {openDelete && <EditModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={() => handleEliminar()} />}
      <div className="m-5 flex justify-center items-center">
        {isLoading || isUpdate ? (
          <CircularProgress />
        ) : data ? (
          <>
            <Card
              sx={{
                width: "90vw",
                maxWidth: "1200px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "80vh",
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
                    <PermContactCalendarOutlinedIcon sx={{ color: "white" }} />
                  </Box>
                  <h1 className="text-2xl font-bold text-center text-primary.main m-5">Detalle de actividad</h1>
                </Box>
                <Button variant="contained" color={prefersDarkMode ? "primary" : "secondary"} href="/" sx={{ borderRadius: "20px" }}>
                  <Typography>Regresar</Typography>
                </Button>
              </Box>
              {data ? (
                <>
                  <h1 className="text-2xl font-bold text-center text-primary.main">{data.usuario}</h1>
                  <TableContainer component={Paper} sx={{ borderRadius: "10px", width: "90%", margin: "auto", mt: 17 }}>
                    {prefersDarkMode ? (
                      <Table sx={{ minWidth: 600 }} aria-label="simple table" className="bg-gray-700">
                        <TableHead>
                          <TableRow>
                            <TableCell>Proyecto</TableCell>
                            <TableCell>Compañía</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Minutos</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Equipo</TableCell>
                            {openModal ? <TableCell>Guardar</TableCell> : <TableCell>Editar</TableCell>}
                            {openModal ? null : <TableCell>Eliminar</TableCell>}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {[data].map((data: Actividad) =>
                            openModal ? (
                              <TableRow key={data.usuario} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                {campos.map((campo) => (
                                  <EditableTableCell
                                    key={campo}
                                    value={data[campo] ?? ""}
                                    onSave={(value) => setUpdateData((prev) => ({ ...prev, _id: data._id ?? "", [campo]: value }))}
                                  />
                                ))}
                                <TableCell>
                                  <Button onClick={actualizarActividad} sx={{ color: "white" }}>
                                    <CheckIcon sx={{ mr: 3 }} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <TableRow key={data.usuario} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                  {data.proyecto}
                                </TableCell>
                                <TableCell>{data.compañía}</TableCell>
                                <TableCell>{data.tipo}</TableCell>
                                <TableCell>{data.descripción}</TableCell>
                                <TableCell>{data.minutos}</TableCell>
                                <TableCell>{data.fecha}</TableCell>
                                <TableCell>{data.Equipo}</TableCell>
                                <TableCell>
                                  <Button onClick={handleEditar} sx={{ color: "white" }}>
                                    <EditIcon sx={{ mr: 3 }} />
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <Button onClick={handleDeleteModal} sx={{ color: "white" }}>
                                    <DeleteIcon sx={{ mr: 3 }} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    ) : (
                      <Table sx={{ minWidth: 600, backgroundColor: "background.default" }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Proyecto</TableCell>
                            <TableCell>Compañía</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Minutos</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Equipo</TableCell>
                            {openModal ? <TableCell>Guardar</TableCell> : <TableCell>Editar</TableCell>}
                            {openModal ? null : <TableCell>Eliminar</TableCell>}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {[data].map((data: Actividad) =>
                            openModal ? (
                              <TableRow key={data.usuario} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                {campos.map((campo) => (
                                  <EditableTableCell
                                    key={campo}
                                    value={data[campo] ?? ""}
                                    onSave={(value) => setUpdateData((prev) => ({ ...prev, _id: data._id ?? "", [campo]: value }))}
                                  />
                                ))}
                                <TableCell>
                                  <Button onClick={actualizarActividad} sx={{ color: "black" }}>
                                    <CheckIcon sx={{ mr: 3 }} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ) : (
                              <TableRow key={data.usuario} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                  {data.proyecto}
                                </TableCell>
                                <TableCell>{data.compañía}</TableCell>
                                <TableCell>{data.tipo}</TableCell>
                                <TableCell>{data.descripción}</TableCell>
                                <TableCell>{data.minutos}</TableCell>
                                <TableCell>{data.fecha}</TableCell>
                                <TableCell>{data.Equipo}</TableCell>
                                <TableCell>
                                  <Button onClick={handleEditar} sx={{ color: "black" }}>
                                    <EditIcon sx={{ mr: 0 }} />
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <Button onClick={handleDeleteModal} sx={{ color: "black" }}>
                                    <DeleteIcon sx={{ mr: 3 }} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    )}
                  </TableContainer>
                </>
              ) : (
                "No hay datos"
              )}
            </Card>
          </>
        ) : (
          <h1 className="text-2xl font-bold text-center text-primary.main m-5">No hay detalle de la actividad</h1>
        )}
      </div>
    </>
  );
};
export default Detail;
