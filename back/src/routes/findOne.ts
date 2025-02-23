import { Router, Request, Response } from 'express';
import { Actividad } from '../models/actividad';
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const act = await Actividad.findById(req.body.id);
    res.status(200).json(act);
    console.log("Envio exitoso de una actividad");
  } catch (error) {
    console.error("Error al obtener actividad:", error);
    res.status(500).json({ error: "Error al obtener actividad" });
  }
});
 
export default router;