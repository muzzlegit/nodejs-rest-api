const express = require("express");

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post("/register", validateBody(userSchemas.signUpInSchema), register);

router.post("/login", validateBody(userSchemas.signUpInSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/users",
  authenticate,
  validateBody(userSchemas.subscriptionSchema, {
    message: "invalid subscription type",
  }),
  updateSubscription
);

module.exports = router;
