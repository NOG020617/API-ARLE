import { Router } from 'express';
import { addMechanic, getAvailableMechanics } from '../controllers/mechanicController';

const router = Router();

router.post('/', addMechanic);
router.get('/available', getAvailableMechanics);

export default router;


