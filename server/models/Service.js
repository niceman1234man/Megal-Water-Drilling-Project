const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model("Service", ServiceSchema);
