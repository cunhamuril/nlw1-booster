import { Request, Response } from "express";

import knex from "../database/connection";

class PointsController {
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res
        .status(404)
        .json({ success: false, message: "Point not found" });
    }

    /**
     * SELECT items.title FROM items
     * JOIN point_items ON items.id = point_items.item_id
     * WHERE point_items.point_id = id
     */
    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    return res.json({
      success: true,
      point: { ...point, items },
    });
  }

  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    // Transaction: garantir que se uma query falhar, não execute a outra
    const trx = await knex.transaction();

    const point = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const [point_id] = await trx("points").insert(point);

    const pointItems = items.map((item_id: number) => ({
      item_id,
      point_id,
    }));

    await trx("point_items").insert(pointItems);

    return res.json({
      success: true,
      point: { id: point_id, ...point, items },
    });
  }
}

export default PointsController;
