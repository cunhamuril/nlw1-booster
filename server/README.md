<img src="../web/src/assets/logo.svg" alt="Ecoleta Logo" width="100%"/>

# 🚀 Rocketseat Next Level Week #1 - App Ecoleta (Back-end)

![Node Shield](https://img.shields.io/static/v1?label=node&message=12.14.1&color=brightgreen&style=flat-square) ![Yarn Shield](https://img.shields.io/static/v1?label=yarn&message=1.22.4&color=informational&style=flat-square) ![Node Shield](https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=flat-square)

Back-end do App Ecoleta

### 💻 Funcionalidades

- Cadastrar pontos de coleta
- Listar itens de coleta
- Listar pontos de coleta (filtro por estado/cidade/itens)
- Listar um ponto de coleta específico

### 📚 Bibliotecas utilizadas

- express | @types/express
- typescript
- ts-node
- ts-node-dev <small><small>(Igual ao nodemon)</small></small>
- knex
- sqlite3

### 👨‍💻 Uso

- Executar `yarn` para instalar as dependências;
- Executar `yarn knex:migrate` para criar tabelas do banco de dados;
- Executar `yarn knex:seed` para popular tabela "items" do banco de dados;
- Executar `yarn dev` para iniciar o servidor em modo de desenvolvimento na porta 3333;
  <br/>
- Criar arquivo de configuração TypeScript:

  ```bash
  yarn tsc --init
  ```

- Executar aplicação com código TypeScript:

  ```bash
  yarn ts-node src/server.ts
  ```

- Executar aplicação com código TypeScript com watching:

  ```bash
  yarn ts-node-dev src/server.ts

  # ou simplesmente

  yarn dev

  ```

### 💾 Banco de Dados

[Aqui estão as entidades da aplicação](docs/db_entities.md)

O banco de dados escolhido é o SQLite, utilizando Query Builder Knex.

#### Uso do Knex

- Criar knexfile.ts (arquivo de configuração do Knex em TypeScript):

  ```bash
  yarn knex init -x ts
  ```

- Criar migrations em arquivos TypeScript:

  ```bash
  yarn knex migrate:make migration_name -x ts
  ```

- Criar banco de dados e tabelas utilizando migrations:

  ```bash
  yarn knex migrate:latest
  ```

- Criar banco de dados e tabelas utilizando migrations:

  ```bash
  yarn knex migrate:latest
  ```

- Criar seeds em arquivos TypeScript:
  <small><small>Seed files allow you to populate your database with test or seed data independent of your migration files.</small></small>

  ```bash
  yarn knex seed:make seed_name -x ts
  ```

- Executar arquivos seeds:

  ```bash
  yarn knex seed:run
  ```

### 🌐 Endpoints

- [Items](docs/items_endpoints.md)
- [Points](docs/points_endpoints.md)
