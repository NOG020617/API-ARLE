import { Router } from 'express';
import { processPayment, getPaymentStatus } from '../controllers/paymentController';

const router = Router();

router.post('/process', processPayment);
router.get('/:id/status', getPaymentStatus);

export default router;
