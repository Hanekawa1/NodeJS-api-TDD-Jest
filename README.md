# NodeJS-api-TDD-Jest

O projeto tem como foco a configuração de um ambiente de testes em uma API de Autenticação(usuário e token). 
Foi utilizado no projeto: 
* Jest (testes); 
* Express (server);
* Sequelize (ORM);
* jwt (token generator); 
* sqlite (mock do banco de dados (originalmente postegresql));
* Outras libs: faker, factory-girl, bcryptjs, cross-env(configuração de env)

Para utilizar:

* Clonar o repositório;
* Instalar as dependências;
    > yarn install ou npm install
* Rodar os testes;
    > yarn test

Assim que os testes forem concluídos, na pasta tests/coverage/lcov-report, o arquivo index.html contém um relatório de cobertura de códigos com os testes, que apresenta quais arquivos/linhas do projeto não foram cobertas pelos testes.
