## Backend:
###### Link do Código: [link](https://github.com/jgtb/jet-jedi-api)
###### Link em Ambiente de Produção: [link](https://jet-jedi-api.herokuapp.com/api/v1/)

Routes:

* (GET) => Get all Jedis *Pagination & Filters (query params: page, limit, name, planet, master, status)
* jedis/:id (GET) => Get Jedi By Id
* jedis (POST) => Create Jedi
* jedis/:id (PATCH) => Update Jedi
* jedis/:id (DELETE) => Delete Jedi

* reports/dashboard (GET) => Get Dashboard Data

* statues (GET) => Get All Status

### INSTRUÇÕES BACKEND:

```
O que precisa ter instalado e rodando: Node JS, MongoDB
```

1. Clonar o repositório do GitHub
2. Instalar as dependências com o comando => yarn OU npm i
3. Inicializar a API com o comando => yarn dev OU npm run dev