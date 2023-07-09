const { getAllContacts } = require("./getAllContacts.js");
const { add } = require("./add.js");
const { getById } = require("./getById.js");
const { deleteById } = require("./deleteById.js");
const { updateById } = require("./updateById.js");
const { updateStatusContact } = require("./updateStatusContact.js");

module.exports = {
  getAllContacts,
  add,
  getById,
  deleteById,
  updateById,
  updateStatusContact,
};
