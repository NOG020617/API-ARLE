import { Router } from 'express';
import { requestService, updateServiceStatus, getServiceById } from '../controllers/serviceController';

const router = Router();

router.post('/', requestService);
router.patch('/:id', updateServiceStatus);
router.get('/:id', getServiceById);

export default router;

