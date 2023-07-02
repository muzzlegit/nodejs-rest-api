const express = require("express");

const controller = require("../../controllers/contacts.js");

const { validateBody, isValidId } = require("../../middlewares/");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", controller.getAllContacts);

router.get("/:contactId", isValidId, controller.getById);

router.post(
  "/",
  validateBody(schemas.addSchema, { message: "missing required name field" }),
  controller.add
);

router.delete("/:contactId", isValidId, controller.deleteById);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateStatusSchema, {
    message: "missing field favorite",
  }),
  isValidId,
  controller.updateById
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema, { message: "missing fields" }),
  controller.updateById
);

module.exports = router;
