interface Actividad {
  usuario: string,
  proyecto: string,
  compañía: string,
  tipo: string,
  descripción: string,
  minutos: number,
  fecha: string,
  Equipo: string
  _id?: string
}

export type { Actividad };