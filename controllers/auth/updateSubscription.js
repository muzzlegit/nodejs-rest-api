const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;

  const newUser = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  if (!newUser) {
    throw HttpError(404);
  }
  res.json({ email: newUser.email, subscription: newUser.subscription });
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
