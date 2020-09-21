import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const { token, password } = request.body;

    const authencicateUser = container.resolve(ResetPasswordService);

    await authencicateUser.execute({
      password,
      token,
    });

    response.status(204).json();
  }
}
