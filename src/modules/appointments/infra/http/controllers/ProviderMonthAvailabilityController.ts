import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ListProvidersController {
  public async index(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const { provider_id } = request.params;

    const { month, year } = request.body;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const avaiabliity = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    response.json(avaiabliity);
  }
}
