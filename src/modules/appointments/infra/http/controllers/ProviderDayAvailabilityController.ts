import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ListProvidersController {
  public async index(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const avaiabliity = await listProviderDayAvailability.execute({
      provider_id,
      day,
      month,
      year,
    });

    response.json(avaiabliity);
  }
}
