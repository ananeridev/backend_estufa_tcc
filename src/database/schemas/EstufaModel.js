const mongoose = require('mongoose');

const EstufaModelSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('EstufaModel', EstufaModelSchema);
