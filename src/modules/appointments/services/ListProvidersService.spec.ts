import AppError from '@shared/errors/AppErros';

import FakesUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakesUsersRepository: FakesUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakesUsersRepository = new FakesUsersRepository();

    listProviders = new ListProvidersService(fakesUsersRepository);
  });
  it('Should be able to list providers', async () => {
    const user1 = await fakesUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakesUsersRepository.create({
      name: 'John Tre',
      email: 'johntre@example.com',
      password: '123456',
    });

    const loggedUser = await fakesUsersRepository.create({
      name: 'John Tre',
      email: 'johnquad@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
