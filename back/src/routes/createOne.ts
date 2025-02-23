import { Router, Request, Response } from 'express';
import { Actividad } from '../models/actividad';
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { usuario, proyecto, compañía, tipo, descripción, minutos, fecha, Equipo } = req.body;
    const actNew = new Actividad({ usuario, proyecto, compañía, tipo, descripción, minutos, fecha, Equipo });
    await actNew.save();
    res.status(200).json(actNew);
    console.log("Creacion exitosa de una actividad");
  } catch (error) {
    console.error("Error al crear actividad", error);
    res.status(500).json({ error: "Error al crear actividad" });
  }
});
 
export default router;