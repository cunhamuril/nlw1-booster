# Points Endpoints

## `/points`

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

## `/points/:id`

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

* Resposta de erro:

  ```json
  {
    "success": false,
    "message": "Point not found"
  }
  ```

## `/points`

- Função: Listar dados de pontos filtrado por cidade, UF e tipos de itens de coleta
- Método: `GET`
- Requisição: Param
- Corpo da requisição:

  ```js
    {
      city: 'Guareí',
      uf: 'SP',
      items: '1, 3, 5',
    }
  ```

- Resposta de sucesso:

  ```json
  {
    "success": true,
    "points": [
      {
        "id": 3,
        "image": "image-fake",
        "name": "Mercado São Francisco",
        "email": "contato@saofrancisco.com.br",
        "whatsapp": "15988885555",
        "latitude": -46.81273213,
        "longitude": -35.19238112,
        "city": "Guareí",
        "uf": "SP"
      },
      {
        "id": 4,
        "image": "image-fake",
        "name": "Mercado Jonhonho",
        "email": "contato@jonhonho.com.br",
        "whatsapp": "15988885555",
        "latitude": -46.81273213,
        "longitude": -35.19238112,
        "city": "Guareí",
        "uf": "SP"
      },
      {
        "id": 5,
        "image": "image-fake",
        "name": "Mercado do Seu Zé",
        "email": "contato@seuze.com.br",
        "whatsapp": "15988885555",
        "latitude": -46.81273213,
        "longitude": -35.19238112,
        "city": "Guareí",
        "uf": "SP"
      }
    ]
  }
  ```

- Resposta de erro:

  ```json
  {
    "success": false,
    "message": "Point not found"
  }
  ```
