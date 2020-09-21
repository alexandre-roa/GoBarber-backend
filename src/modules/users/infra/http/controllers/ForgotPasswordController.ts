import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const { email } = request.body;

    const authencicateUser = container.resolve(SendForgotPasswordEmailService);

    await authencicateUser.execute({
      email,
    });

    response.status(204).json();
  }
}
