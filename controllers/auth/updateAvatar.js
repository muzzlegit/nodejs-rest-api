const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const { User } = require("../../models");

const { HttpError, ctrlWrapper } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const newFilename = `${_id}_${originalname}`;

  await Jimp.read(tempUpload)
    .then((avatar) => {
      avatar.resize(250, 250).quality(60).write(tempUpload);
    })
    .catch((err) => {
      throw HttpError(403, err.message);
    });

  const resultUpload = path.join(avatarsDir, newFilename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", newFilename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};
