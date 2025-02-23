import { Router, Request, Response } from 'express';
import { Actividad } from '../models/actividad';
const router = Router();

router.delete("/", async (req: Request, res: Response) => {
  try {
    const deleteAct = await Actividad.findByIdAndDelete(req.body.id);
    !deleteAct ? res.status(404).json({ error: "Actividad no encontrada" }): res.status(200).json(deleteAct);
    console.log("Eliminacion exitosa de la actividad");
  } catch (error) {
    console.error("Error al eliminar la actividad", error);
    res.status(500).json({ error: "Error al eliminar la actividad" });
  }
});
 
export default router;