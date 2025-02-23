import { Router, Request, Response } from 'express';
import { Actividad } from '../models/actividad';
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const act = (await Actividad.find()).reverse();
    res.status(200).json(act);
    console.log("Envio exitoso de actividades");
  } catch (error) {
    console.error("Error al obtener actividades:", error);
    res.status(500).json({ error: "Error al obtener actividades" });
  }
});
 
export default router;