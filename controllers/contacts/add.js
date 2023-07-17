const { Contact } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const add = async (req, res) => {
  const { _id: owner } = req.user;

  const contact = await Contact.create({ ...req.body, owner });
  res.status(201).json(contact);
};

module.exports = {
  add: ctrlWrapper(add),
};
