require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const path = require("path");

/* Swagger settings */
/* puedo ver las que son required en la doc OAS version3 */
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

/* definition es requerida,es un objeto con las propiedades también requeridas openapi,info,servers y aparte también la prop apis para indicar donde estan los endpoints */
const swaggerInitialSpecs = {
  definition:{
    openapi: "3.0.0",
    info: {
      title: "NodeJS MongoDB API",
      version: "1.0.0",
      description: "NodeJS MongoDB API",
    },
    servers: 
    [
      {
        url: "http://localhost:9000",
        description: "Local server",
      },
    ],
  },
  apis:[`${path.join(__dirname,"./routes/*.js")}`],
}


// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
/* el middleware para swagger lleva la ruta como primer arg y despues un par de middlewares.En swaggerUI.setup va la configuracion inicial,la cual la tiene el swaggerJSDOC */
app.use("/api-doc",
  swaggerUi.serve, //.serve para que sirva la UI
  swaggerUi.setup( swaggerJsDoc(swaggerInitialSpecs) ));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => {
  console.clear();
  console.log("Server listening to", port)}
  );
