const { Contact } = require("../../models/contact.js");

const { HttpError, ctrlWrapper } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json(contact);
};

module.exports = {
  getById: ctrlWrapper(getById),
};