import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Inventory } from '../entity/Inventory';

export const addInventory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, stock, price } = req.body;
    const inventoryRepository = getRepository(Inventory);

    const newInventory = inventoryRepository.create({ name, description, stock, price });
    const savedInventory = await inventoryRepository.save(newInventory);
    res.status(201).json(savedInventory);
  } catch (err) {
    res.status(500).json({ message: 'Error al agregar el inventario' });
  }
};

export const updateInventory = async (req: Request, res: Response): Promise<void> => {
  try {
    const inventoryId = parseInt(req.params.id, 10);
    const { name, description, stock, price } = req.body;
    const inventoryRepository = getRepository(Inventory);

    const inventoryToUpdate = await inventoryRepository.findOne(inventoryId);
    if (inventoryToUpdate) {
      inventoryToUpdate.name = name;
      inventoryToUpdate.description = description;
      inventoryToUpdate.stock = stock;
      inventoryToUpdate.price = price;

      const updatedInventory = await inventoryRepository.save(inventoryToUpdate);
      res.json(updatedInventory);
    } else {
      res.status(404).json({ message: 'Inventario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el inventario' });
  }
};

export const getInventoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const inventoryId = parseInt(req.params.id, 10);
    const inventoryRepository = getRepository(Inventory);

    const foundInventory = await inventoryRepository.findOne(inventoryId);
    if (foundInventory) {
      res.json(foundInventory);
    } else {
      res.status(404).json({ message: 'Inventario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el inventario' });
  }
};



