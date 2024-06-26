import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Mechanic } from '../entity/Mechanic';

export const addMechanic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, latitude, longitude, availability } = req.body;
    const mechanicRepository = getRepository(Mechanic);

    const newMechanic = mechanicRepository.create({ name, latitude, longitude, availability });
    const savedMechanic = await mechanicRepository.save(newMechanic);
    res.status(201).json(savedMechanic);
  } catch (err) {
    res.status(500).json({ message: 'Error al agregar el mecánico' });
  }
};

export const getAvailableMechanics = async (req: Request, res: Response): Promise<void> => {
  try {
    const mechanicRepository = getRepository(Mechanic);
    const availableMechanics = await mechanicRepository.find({ where: { availability: true } });
    res.json(availableMechanics);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los mecánicos disponibles' });
  }
};


