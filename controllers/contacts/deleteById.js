const { Contact } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  deleteById: ctrlWrapper(deleteById),
};
