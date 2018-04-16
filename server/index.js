import routers from "./routes";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import request from "request";
import cheerio from "cheerio";

export default path => {
  // Create Instance of Express
  const app = express();

  // Run Morgan for Logging
  app.use(logger("dev"));
  app.use(bodyParser.json());

  app.use(express.static(`${path}/client`));
  app.use("/api/races", routers.races);

  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("*", (req, res) => {
    res.sendFile(`${path}/client/index.html`);
  });


  return app;
  // -------------------------------------------------
};
