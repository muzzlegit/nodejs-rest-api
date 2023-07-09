const express = require("express");

const {
  getAllContacts,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../../controllers/contacts");

const { validateBody, isValidId } = require("../../../middlewares");

const { schemas } = require("../../../models/contact");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getById);

router.post(
  "/",
  validateBody(schemas.addSchema, { message: "missing required name field" }),
  add
);

router.delete("/:contactId", isValidId, deleteById);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateStatusSchema, {
    message: "missing field favorite",
  }),
  isValidId,
  updateById
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema, { message: "missing fields" }),
  updateById
);

module.exports = router;