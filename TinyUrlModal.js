const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const urlEntry = new Schema({
  id: ObjectId,
  slug: String,
  url: String,
});
const TinyURLModal = mongoose.model('TinyUrl', urlEntry);

module.exports = TinyURLModal;
