import { Router } from 'express';
import { addInventory, updateInventory, getInventoryById } from '../controllers/inventoryController';

const router = Router();

router.post('/', addInventory);
router.put('/:id', updateInventory);
router.get('/:id', getInventoryById);

export default router;


