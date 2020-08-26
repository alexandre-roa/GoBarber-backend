import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {

    const {email, password} = request.body

    const authencicateUser = new AuthenticateUserService()

    const { user, token } = await authencicateUser.execute({
      email,
      password,
    })

    delete user.password

    response.json({ user, token });
  } catch (e) {
    response.status(400).json({ message: e.message });
  }
});

export default sessionsRouter;
