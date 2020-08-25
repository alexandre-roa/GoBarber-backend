import { Router, request, response } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm'


import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      provider,
      date: parsedDate,
    });

    response.json(appointment);
  } catch (e) {
    response.status(400).json({ message: e.message });
  }
});

export default appointmentsRouter;
