import mongoose, { Schema, Document } from "mongoose";

 interface IActividad extends Document {
  usuario: string;
  proyecto: string;
  compañía: string;
  tipo: string;
  descripción: string;
  minutos: number;
  fecha: string,
  Equipo: string;
}

const ActividadSchema = new Schema<IActividad>(
  {
    usuario: { type: String, required: true },
    proyecto: { type: String, required: true },
    compañía: { type: String, required: true },
    tipo: { type: String, required: true },
    descripción: { type: String, required: true },
    minutos: { type: Number, required: true },
    fecha: { type: String, required: true },
    Equipo: { type: String, required: true },
  },
  { collection: "Actividades" }
);

export const Actividad = mongoose.model<IActividad>("Actividad", ActividadSchema);