import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actividades: [],
  idActividad: "",
};

export const actividadSlice = createSlice({
  name: "actividad",
  initialState,
  reducers: {
    resetActividades: () => initialState,

    setActividades: (state, action) => {
      state.actividades = action.payload;
    },

    setIdActividad: (state, action) => {
      state.idActividad = action.payload;
    },

  },
});

export const { resetActividades, setActividades, setIdActividad } = actividadSlice.actions;