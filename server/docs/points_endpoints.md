# Points Endpoints

#### `/points`

- Função: Cadastrar pontos de coleta
- Método: `POST`
- Requisição: body
- Corpo da Requisição:
  ```json
  {
    "name": "Mercado Legal",
    "email": "contato@legal.com.br",
    "whatsapp": "15988885555",
    "latitude": -46.81273213,
    "longitude": -35.19238112,
    "city": "Guareí",
    "uf": "SP",
    "items": [1, 2, 6]
  }
  ```
- Resposta de sucesso:
  ```json
  {
    "success": true,
    "point": {
      "id": 4,
      "image": "image-fake",
      "name": "Mercado Legal",
      "email": "contato@legal.com.br",
      "whatsapp": "15988885555",
      "latitude": -46.81273213,
      "longitude": -35.19238112,
      "city": "Guareí",
      "uf": "SP",
      "items": [1, 2, 6]
    }
  }
  ```

#### `/points/:id`

- Função: Listar dados de um ponto específico
- Método: `GET`
- Resposta de sucesso:

  ```json
  {
    "success": true,
    "point": {
      "id": 3,
      "image": "image-fake",
      "name": "Mercado São Francisco",
      "email": "contato@saofrancisco.com.br",
      "whatsapp": "15988885555",
      "latitude": -46.81273213,
      "longitude": -35.19238112,
      "city": "Guareí",
      "uf": "SP",
      "items": [
        {
          "title": "Lâmpadas"
        },
        {
          "title": "Pilhas e baterias"
        },
        {
          "title": "Óleo de Cozinha"
        }
      ]
    }
  }
  ```
