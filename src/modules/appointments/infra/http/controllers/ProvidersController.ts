import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ListProvidersController {
  public async index(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const user_id = request.user.id;

    const createAppointment = container.resolve(ListProvidersService);

    const providers = await createAppointment.execute({
      user_id,
    });

    response.json(providers);
  }
}
