import { Request, Response } from "express";

import knex from "../database/connection";
import serializedFile from "../utils/serializedFile";

class PointsController {
  async index(req: Request, res: Response) {
    const { city, uf, items } = req.query;

    // Vai retornar um array de números
    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems) // whereIn: que tem dentro do array, se tem pelo menos um dos números do array
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct() // distinct: se um ponto tem 2 tipos de itens, vai retornar apenas um ponto distinto
      .select("points.*");

    if (points.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Point not found" });
    }

    const serializedPoints = points.map((point) => {
      return {
        ...points,
        image_url: serializedFile(point.image),
      };
    });

    return res.json({ success: true, points: serializedPoints });
  }

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

    const serializedPoint = {
      ...point,
      image_url: serializedFile(point.image),
    };

    return res.json({
      success: true,
      point: { ...serializedPoint, items },
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
      image: req.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const [point_id] = await trx("points").insert(point);

    // Agora não é mais um array que é enviado, então precisa enviar os dados separado por vírgula
    const pointItems = items
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => ({
        item_id,
        point_id,
      }));

    await trx("point_items").insert(pointItems);

    /**
     * IMPORTANTE! Sem este commit, o Knex não vai realizar a query
     */
    await trx.commit();

    return res.json({
      success: true,
      point: { id: point_id, ...point, items },
    });
  }
}

export default PointsController;
