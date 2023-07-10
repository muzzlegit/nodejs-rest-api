const { Contact } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const contactsList = await Contact.find({ owner, favorite }, "", {
    skip: (page - 1) * limit,
    limit,
  });
  res.json(contactsList);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
