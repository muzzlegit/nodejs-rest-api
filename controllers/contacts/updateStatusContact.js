const { Contact } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const newContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!newContact) {
    throw HttpError(404, "Not Found");
  }
  res.json(newContact);
};

module.exports = {
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
