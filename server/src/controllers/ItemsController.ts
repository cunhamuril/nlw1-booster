import { Request, Response } from "express";

import knex from "../database/connection";
import serializedFile from "../utils/serializedFile";

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");

    // Serialização de dados: transformação de dados
    const serializedItems = items.map((item) => {
      const { id, title, image } = item;

      return {
        id,
        title,
        image_url: serializedFile(image),
      };
    });

    return res.json({ success: true, items: serializedItems });
  }
}

export default ItemsController;
