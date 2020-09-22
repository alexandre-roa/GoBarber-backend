import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    const user_id = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id });

    delete user.password;

    return response.json(user);
  }

  public async update(
    request: Request,
    response: Response,
  ): Promise<Response | void> {
    try {
      const user_id = request.user.id;
      const { name, email, old_password, password } = request.body;
      const updateProfile = container.resolve(UpdateProfileService);

      const user = await updateProfile.execute({
        user_id,
        name,
        email,
        old_password,
        password,
      });

      delete user.password;

      response.json(user);
    } catch (e) {
      response.status(400).json({ message: e.message });
    }
  }
}
