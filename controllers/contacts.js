const { Contact } = require("../models/contact.js");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const contactsList = await Contact.find();
  res.json(contactsList);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json(contact);
};

const add = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const newContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!newContact) {
    throw HttpError(404, "Not Found");
  }
  res.json(newContact);
};

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
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteById: ctrlWrapper(deleteById),
};
