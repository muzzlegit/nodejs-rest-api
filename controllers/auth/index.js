const { register } = require("./register.js");
const { login } = require("./login.js");
const { getCurrent } = require("./getCurrent.js");
const { logout } = require("./logout.js");
const { updateSubscription } = require("./updateSubscription.js");
const { updateAvatar } = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  verifyEmail,
  resendVerifyEmail,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
