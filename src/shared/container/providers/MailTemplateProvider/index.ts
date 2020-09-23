import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import IMailTemplateProvider from './model/IMailTemplateProvider';
import HandlebarsTemplateMailProvider from './implementations/HandlebarsTemplateEmailProvider';

const providers = {
  handlebars: HandlebarsTemplateMailProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
