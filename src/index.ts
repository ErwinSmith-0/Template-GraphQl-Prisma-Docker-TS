import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlserver from "./graphql";

async function init() {
  const PORT = Number(process.env.POST) || 8000;
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is Running" });
  });

  const gqlServer = await createApolloGraphqlserver();
  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
}
init();
