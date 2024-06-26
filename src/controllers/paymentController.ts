import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Payment } from '../entity/Payment';

export const processPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { serviceId, amount } = req.body;
    const paymentRepository = getRepository(Payment);

    const newPayment = paymentRepository.create({
      serviceId,
      amount,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const savedPayment = await paymentRepository.save(newPayment);
    res.status(201).json(savedPayment);
  } catch (err) {
    res.status(500).json({ message: 'Error al procesar el pago' });
  }
};

export const getPaymentStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const paymentId = parseInt(req.params.id, 10);
    const paymentRepository = getRepository(Payment);

    const payment = await paymentRepository.findOne(paymentId);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el estado del pago' });
  }
};


