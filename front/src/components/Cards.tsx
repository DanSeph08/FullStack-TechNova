import { useState } from "react";
import { Box, Grid2, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Actividad } from "../interfaces/actividades";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SearchIcon from "@mui/icons-material/Search";
import IconoHogar from "../icons/IconoHogar";
import { prefersDarkMode } from "../styles/theme";
import { useDispatch } from "react-redux";
import { setIdActividad } from "../store/slices/actividadSlice";


const Cards = (card: Actividad) => {

  //#region Props
  const {usuario, _id, proyecto, compañía, Equipo, minutos } = card;
  //#endregion
  
  //#region react-redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //#endregion


  //#region  useStates
  // const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  //#endregion

  //#region Funciones abrir y cerrar modal opciones
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //#endregion

  //#region Funciones de las acciones
  const handleDetalleIcon = () => {
    dispatch(setIdActividad(_id));
    navigate("/verDetalle");
    // setOpenModal(true);
  };
  //#endregion

  //#region Acciones del SpeedDial
  const actions = [
    {
      icon: <VisibilityOutlinedIcon sx={{ color: prefersDarkMode ? "primary.main" : "secondary.main" }} />,
      name: "Ver detalle",
      action: handleDetalleIcon,
      disabled: false
    },
  ];
  //#endregion

  return (
    <>
      <Grid2
        container
        sx={{
          border: "1px solid",
          width: "30%",
          borderRadius: "20px",
          borderColor: prefersDarkMode ? "" : "secondary.main",
          bgcolor: prefersDarkMode ? "background.paper" : "background.paper",
          ":hover": {
            boxShadow: prefersDarkMode ? "0px 0px 10px 10px rgba(255,255,255,0.22)" : "",
          },
        }}
      >
        <Grid2 width="100%">
          <Grid2 pt={1}>
            <SpeedDial
              ariaLabel="SpeedDial example"
              icon={<SpeedDialIcon icon={<SearchIcon />} />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
              direction="left"
              sx={{
                width: "100%",
                minWidth: "100px",
                "& .MuiSpeedDial-fab": {
                  background: "none",
                  boxShadow: "none",
                  color: prefersDarkMode ? "primary.main" : "secondary.main",
                  "&:hover": {
                    background: "none",
                    boxShadow: "none",
                  },
                },
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.action}
                  // disabled={action.disabled}
                  sx={{
                    opacity: action.disabled ? 0.5 : 1,
                    "&:hover": {
                      background: action.disabled ? "palette.secondary.main" : "palette.secondary.main",
                      cursor: action.disabled ? "not-allowed" : "pointer",
                    },
                  }}
                />
              ))}
            </SpeedDial>
          </Grid2>
          <Box pb={2}>
            <Box ml={2}>
              {prefersDarkMode ? (
                <div className="bg-gray-700 p-4 mr-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-white font-semibold text-lg">{usuario ? usuario : "Sin datos"}</h3>
                  <p className="text-[#a4a4a4]">
                    <IconoHogar />
                    Equipo: {Equipo ? Equipo : "Sin datos"}
                  </p>
                  <p className="text-gray-400 mt-2">Proyecto: {proyecto ? proyecto : "Sin datos"}</p>
                  <p className="text-gray-400">Tiempo: {minutos ? minutos : "Sin datos"}</p>
                  <p className="text-gray-400">Compañía: {compañía ? compañía : "Sin datos"}</p>
                </div>
              ) : (
                <div className="bg-[#F5F5F5] p-6 mr-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-black font-semibold text-lg">{usuario ? usuario : "Sin datos"}</h3>
                  <p className="text-[#2c2c2c]">
                    <IconoHogar />
                    Equipo: {Equipo ? Equipo : "Sin datos"}
                  </p>
                  <p className="text-gray-500 mt-2">Proyecto: {proyecto ? proyecto : "Sin datos"}</p>
                  <p className="text-gray-500">Tiempo: {minutos ? minutos : "Sin datos"}</p>
                  <p className="text-gray-500">Compañía: {compañía ? compañía : "Sin datos"}</p>
                </div>
              )}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Cards;
