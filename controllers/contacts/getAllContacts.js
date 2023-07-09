const { Contact } = require("../../models/contact.js");

const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const contactsList = await Contact.find();
  res.json(contactsList);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
