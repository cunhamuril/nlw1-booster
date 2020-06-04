# Items Endpoints

## `/items`

- Função: Listar todos os items de coleta
- Método: `GET`
- Resposta de sucesso:
  ```json
  {
    "success": true,
    "items": [
      {
        "id": 1,
        "title": "Lâmpadas",
        "image_url": "http://localhost:3333/uploads/lampadas.svg"
      },
      {
        "id": 2,
        "title": "Pilhas e baterias",
        "image_url": "http://localhost:3333/uploads/baterias.svg"
      },
      {
        "id": 3,
        "title": "Papéis e Papelão",
        "image_url": "http://localhost:3333/uploads/papeis-papelao.svg"
      },
      {
        "id": 4,
        "title": "Resíduos Eletrônicos",
        "image_url": "http://localhost:3333/uploads/eletronicos.svg"
      },
      {
        "id": 5,
        "title": "Resíduos Orgânicos",
        "image_url": "http://localhost:3333/uploads/organicos.svg"
      },
      {
        "id": 6,
        "title": "Óleo de Cozinha",
        "image_url": "http://localhost:3333/uploads/oleo.svg"
      }
    ]
  }
  ```
