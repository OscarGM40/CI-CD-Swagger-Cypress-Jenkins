const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
  *        name:
  *          type: string
  *          description: The name of the user
  *        age:
  *          type: integer
  *          description: The age of the user
  *        email:
  *          type: string
  *          description: The email of the user
 *       required:
 *         - name
 *         #- age
 *         - email
 *       example:
 *         name: John Doe
 *         age: 30
 *         email: alan@example.com
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    tags: [User] #hay que asociar cada endpoint a un Schema
 *    summary: Create a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: User created
 */
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.status(201).json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @swagger
 * /api/users:
 *  get:
 *    tags: [User] # hay que asociar cada endpoint a un Schema
 *    summary: Get all users
 *    responses:
 *      200:
 *        description: Retrieves all users
 *        content:
 *         application/json:
 *          schema:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 */
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    tags: [User] # hay que asociar cada endpoint a un Schema
 *    summary: Given an Identificator retrieves one user
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The id of the user
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Retrieves one user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User not found
 */
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    tags: [User]
 *    summary: Given an Identificator deletes that user
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The id of the user
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Succesfully deleted the user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User not found for deleting
 */
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(404).json({ message: error }));
});

/**
 * @swagger
 * /api/users:
 *  put:
 *    tags: [User]
 *    summary: Update the user that matches with the paramId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The id of the user for updating
 *        required: true
 *        schema:
 *         type: string
 *    responses:
 *      201:
 *        description: User created
 */
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
