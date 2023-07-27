const express = require("express");

const {
  register,
  login,
  verifyEmail,
  resendVerifyEmail,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post("/register", validateBody(userSchemas.signUpInSchema), register);

router.get("/verify/:verificationToken", verifyEmail);

router.post(
  "/verify",
  validateBody(userSchemas.verifySchema, {
    message: "Missing required field email",
  }),
  resendVerifyEmail
);

router.post("/login", validateBody(userSchemas.signUpInSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/users",
  authenticate,
  validateBody(userSchemas.subscriptionSchema, {
    message: "Invalid subscription type",
  }),
  updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  updateAvatar
);

module.exports = router;
