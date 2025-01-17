const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const subscriptionsList = ["starter", "pro", "business"];

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscriptionsList,
    default: "starter",
  },
  token: String,
  avatarURL: String,
});

userSchema.post("save", handleMongooseError);

const signUpInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionsList)
    .required(),
});

const userSchemas = {
  signUpInSchema,
  subscriptionSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  userSchemas,
};
