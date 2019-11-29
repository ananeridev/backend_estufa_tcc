const estufaModel = require('./../database/schemas/EstufaModel');

class EstufaController {
  async create(req, res) {
    const { titulo, descricao } = req.body;

    const estufa = await estufaModel.create({
      titulo,
      descricao
    });

    return res.status(200).json(estufa);
  }

  async read(req, res) {
    const estufa = await estufaModel.find({});

    return res.status(200).json(estufa);
  }

  async update(req, res) {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    const estufa = await estufaModel.findOneAndUpdate({ _id: id}, {
      titulo,
      descricao
    });

    return res.json(estufa);
  }

  async delete(req, res) {
    const { id } = req.params;
    const estufa = await estufaModel.deleteOne({ _id: id });

    return res.json(estufa);
  }

}

module.exports = new EstufaController();
