const express = require("express");
const swaggerUI = require("swagger-ui-express");

const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");

const app = express();
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUI.serve, //.serve para que sirva la UI
  swaggerUI.setup(swaggerJsDocs)
);

app.get("/string", (req, res) => {
  res.send("This is a String");
});

app.get("/user", (req, res) => {
  res.send({
    id: 1,
    name: "John",
    lastName: "Doe",
    age: 30,
  });
});

app.get("/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "John",
      lastName: "Doe",
      age: 30,
    },
    {
      id: 2,
      name: "Jane",
      lastName: "Doe",
      age: 33,
    },
    {
      id: 1,
      name: "Amee",
      lastName: "Farenheit",
      age: 22,
    },
  ]);
});

app.get("/users/:userId", (req, res) => {
  res.send({
      id: 1,
      name: "John",
      lastName: "Doe",
      age: 30,
    });
});

app.post("/create", (req, res) => {
  const {name,lastName,age} = req.body;
  const user = { name,lastName,age }

  res.send({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
    });
});

app.listen(3000, () => {
  // console.clear()
  console.log(
    "Server running on port 3000.Swagger UI on http://localhost:3000/api-docs"
  );
});
