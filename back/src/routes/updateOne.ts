import { Router, Request, Response } from 'express';
import { Actividad } from '../models/actividad';
const router = Router();

router.put("/", async (req: Request, res: Response) => {
  try {
    const { _id, ...update } = req.body;
    const updateAct = await Actividad.findByIdAndUpdate(_id, {$set: update}, { new: true, runValidators: true });
    !updateAct ? res.status(404).json({ error: "Actividad no encontrada" }): res.status(200).json(updateAct);
    console.log("Actualizacion exitosa de la actividad");
  } catch (error) {
    console.error("Error al actualizar la actividad", error);
    res.status(500).json({ error: "Error al actualizar la actividad" });
  }
});
 
export default router;