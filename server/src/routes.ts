import express, { response } from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (req, res) => {
  const items = await knex("items").select("*");

  // Serialização de dados: transformação de dados
  const serializedItems = items.map((item) => {
    const { id, title, image } = item;

    return {
      id,
      title,
      image_url: `http://localhost:3333/uploads/${image}`,
    };
  });

  return res.json(serializedItems);
});

routes.post("/points", async (req, res) => {
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

  const [point_id] = await trx("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const pointItems = items.map((item_id: number) => ({
    item_id,
    point_id,
  }));

  await trx("point_items").insert(pointItems);

  return res.json({ success: true });
});

export default routes;
