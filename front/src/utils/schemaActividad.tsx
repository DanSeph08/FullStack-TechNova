import * as Yup from "yup";

export const schemaActividad = Yup.object({
  usuario: Yup.string().required("El nombre es requerido"),
  proyecto: Yup.string().required("El proyecto es requerido"),
  compañía: Yup.string().required("La compañía es requerida"),
  tipo: Yup.string().required("El tipo es requerido"),
  descripción: Yup.string().required("La descripción es requerido"),
  minutos: Yup.number().required("Los minutos son requeridos"),
  fecha: Yup.string().required("La fecha es requerida"),
  Equipo: Yup.string().required("El equipo es requerido"),
});
