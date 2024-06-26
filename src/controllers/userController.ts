import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password, email } = req.body;
    const userRepository = getRepository(User);

    const newUser = userRepository.create({ username, password, email, createdAt: new Date() });
    const savedUser = await userRepository.save(newUser);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.id, 10);
    const userRepository = getRepository(User);

    const foundUser = await userRepository.findOne(userId);
    if (foundUser) {
      res.json(foundUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { username, password, email } = req.body;
    const userRepository = getRepository(User);

    const userToUpdate = await userRepository.findOne(userId);
    if (userToUpdate) {
      userToUpdate.username = username;
      userToUpdate.password = password;
      userToUpdate.email = email;

      const updatedUser = await userRepository.save(userToUpdate);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.id, 10);
    const userRepository = getRepository(User);

   


