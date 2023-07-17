const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;

  const newUser = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
    projection: "email subscription",
  });

  if (!newUser) {
    throw HttpError(404);
  }
  res.json(newUser);
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
