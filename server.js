const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://muzzle:<password>@phonebook.xrsqkmm.mongodb.net/";

mongoose.connect(DB_HOST);

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});
