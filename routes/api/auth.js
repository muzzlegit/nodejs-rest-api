const express = require("express");

const { register } = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post("/register", validateBody(userSchemas.registerSchema), register);

module.exports = router;
