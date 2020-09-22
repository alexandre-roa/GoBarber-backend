import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderProviderMonthAvailabilityControllersController from '../controllers/ProviderMonthAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityControllers = new ProviderProviderMonthAvailabilityControllersController();

providersRouter.use(ensureAthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityControllers.index,
);

export default providersRouter;
