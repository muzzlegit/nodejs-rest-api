const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (res, file, cb) => {
    cb(null, file.originlname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
