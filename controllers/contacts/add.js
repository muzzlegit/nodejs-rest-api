const { Contact } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const add = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

module.exports = {
  add: ctrlWrapper(add),
};
