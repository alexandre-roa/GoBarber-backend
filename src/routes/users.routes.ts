import { Router, request, response } from 'express';

import CreateUserService from '../services/CreateUserService'

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      password
    })

    response.json(user);
  } catch (e) {
    response.status(400).json({ message: e.message });
  }
});

export default usersRouter;
