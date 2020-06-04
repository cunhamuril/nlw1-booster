import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (req, res) => {
  const items = await knex("items").select("*"); // SELECT * FROM items

  // Serialização de dados: transformação de dados
  const serializedItems = items.map((item) => {
    const { title, image } = item;

    return {
      title,
      image_url: `http://localhost:3333/uploads/${image}`,
    };
  });

  return res.json(serializedItems);
});

export default routes;
