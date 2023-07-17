const express = require("express");

const {
  getAllContacts,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { contactSchemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, getAllContacts);

router.get("/:contactId", authenticate, isValidId, getById);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addSchema, {
    message: "missing required name field",
  }),
  add
);

router.delete("/:contactId", authenticate, isValidId, deleteById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(contactSchemas.updateStatusSchema, {
    message: "missing field favorite",
  }),
  isValidId,
  updateById
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchemas.addSchema, { message: "missing fields" }),
  updateById
);

module.exports = router;
