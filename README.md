# Recuperação de senha

**RF(Requisitos funcionais)**

- O usuário deve recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF(Requisitos não funcionais)**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN(Regras de negócio)**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF(Requisitos funcionais)**

- O usuário deve poder atualizar o seu perfil, nome, email e senha;

**RN(Regras de negócio)**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve infromar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

# Painel do prestador

**RF(Requisitos funcionais)**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF(Requisitos não funcionais)**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN(Regras de negócio)**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviço

**RF(Requisitos funcionais)**

- O usuário deve poder listar todos os prestadores de serviço;
- O usuário deve poder listar os dias do mês com pelo menos um horário disponível de um prestador;
- O usuário deve porder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF(Requisitos não funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN(Regras de negócio)**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar dispóníveis entre 8h as 18h (Primeiro as 8h, último as 17h)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
