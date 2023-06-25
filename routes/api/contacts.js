const express = require("express");

const controller = require("../../controllers/contacts.js");

const { validateBody } = require("../../middlewares/");

const { addSchema } = require("../../schemas/contacts.js");

const router = express.Router();

router.get("/", controller.getAllContacts);

router.get("/:contactId", controller.getById);

router.post(
  "/",
  validateBody(addSchema, { message: "missing required name field" }),
  controller.add
);

router.delete("/:contactId", controller.deleteById);

router.put(
  "/:contactId",
  validateBody(addSchema, { message: "missing fields" }),
  controller.updateById
);

module.exports = router;
