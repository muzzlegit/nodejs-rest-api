const { Contact } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const newContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!newContact) {
    throw HttpError(404);
  }
  res.json(newContact);
};

module.exports = {
  updateById: ctrlWrapper(updateById),
};
