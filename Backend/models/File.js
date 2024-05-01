const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  classify: String,
  parentId: String,
  isDirectory: Boolean,
  canvas: {
    type: mongoose.Schema.ObjectId,
    ref: 'Canvas'
  },
});

module.exports = mongoose.model('File', fileSchema);