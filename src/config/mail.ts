interface IMailCOnfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: { email: string; name: string };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'domain@example.com.br',
      name: 'John Doe',
    },
  },
} as IMailCOnfig;
