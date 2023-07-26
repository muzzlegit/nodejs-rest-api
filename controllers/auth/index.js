const { register } = require("./register.js");
const { login } = require("./login.js");
const { getCurrent } = require("./getCurrent.js");
const { logout } = require("./logout.js");
const { updateSubscription } = require("./updateSubscription.js");
const { updateAvatar } = require("./updateAvatar");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
