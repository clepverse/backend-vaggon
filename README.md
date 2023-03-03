# Projeto vaggon - BackEnd ##

## Tecnologias usadas: ##

Projeto criado com NodeJS na versão "18.14.0"

* Mysql: "8.0.32"
* Typescript: "4.9.5"
* Bcrypt: "5.1.0"
* Cors: "2.8.5"
* Express: "4.18.2"
* Express-async-errors: "3.1.1"
* Jsonwebtoken: "9.0.0"
* Yup: "1.0.2"
* Tsup: "6.6.3"
* Tsx: "3.12.3"
* Prisma: "4.10.1"
* Prisma-erd-generator: "1.2.5"
* Mermaid-js/mermaid-cli: "9.4.0"

### ERD do Banco de dados: ###
![alt text](prisma/ERD.svg "Title")

#### Rotas: ####
```
.POST   /sessions
.POST   /signup
.GET    /me/:id
.POST   /activity
.GET    /activity
.PUT    /activity/:id
.DELETE /activity/:id
```
### .env prisma ###
````
                      name : password       :port/database
DATABASE_URL="mysql://mysql:docker@localhost:3306/agenda?schema=public"
````
#### Comandos para rodar o projeto: ####

````
git clone https://github.com/clepverse/backend-vaggon.git

npm install

npm run start
npm run start:dev <- watch

npx prisma db push
npx prisma generate

npx prisma studio <- Extra, caso queira acompanhar os dados que estão indo pro banco.

Buid:
npm run build
````
