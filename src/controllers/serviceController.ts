import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Service } from '../entity/Service';

export const requestService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, mechanicId, vehicleInfo, latitude, longitude } = req.body;
    const serviceRepository = getRepository(Service);

    const newService = serviceRepository.create({
      userId,
      mechanicId,
      vehicleInfo,
      latitude,
      longitude,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedService = await serviceRepository.save(newService);
    res.status(201).json(savedService);
  } catch (err) {
    res.status(500).json({ message: 'Error al solicitar el servicio' });
  }
};

export const updateServiceStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceId = parseInt(req.params.id, 10);
    const { status } = req.body;
    const serviceRepository = getRepository(Service);

    const serviceToUpdate = await serviceRepository.findOne(serviceId);
    if (serviceToUpdate) {
      serviceToUpdate.status = status;
      serviceToUpdate.updatedAt = new Date();

      const updatedService = await serviceRepository.save(serviceToUpdate);
      res.json(updatedService);
    } else {
      res.status(404).json({ message: 'Servicio no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el estado del servicio' });
  }
};

export const getServiceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceId = parseInt(req.params.id, 10);
    const serviceRepository = getRepository(Service);

    const foundService = await serviceRepository.findOne(serviceId);
    if (foundService) {
      res.json(foundService);
    } else {
      res.status(404).json({ message: 'Servicio no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el servicio' });
  }
};


