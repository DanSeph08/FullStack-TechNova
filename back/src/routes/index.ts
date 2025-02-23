import { Router } from 'express';
import findAll from './findAll';
import createOne from './createOne';
import findOne from './findOne';
import deleteOne from './deleteOne';
import updateOne from './updateOne';

const router = Router();

router.use("/findAll", findAll)
router.use("/createOne", createOne);
router.use("/findOne", findOne);
router.use("/deleteOne", deleteOne);
router.use("/updateOne", updateOne); 

export default router;