import AppError from '@shared/errors/AppErros';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  it('Should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      user_id: '1234567890',
      provider_id: '1234567890',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234567890');
  });

  it('Should NOT be abble to create two appointments on the same date and time', async () => {
    const appointmentDate = new Date(2020, 8, 14, 5);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: '1234567890',
      provider_id: '1234567890',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '1234567890',
        provider_id: '1234567890',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
