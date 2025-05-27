const service = require('./card.service');
const resHelper = require('../utils/response');

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  resHelper.ok(res, data);
};

exports.getById = async (req, res) => {
  const card = await service.getById(req.params.id);
  return card
    ? resHelper.ok(res, card)
    : res.status(404).json({ message: 'No se encontró la tarjeta con el ID especificado.' });
};

exports.create = async (req, res) => {
  const newCard = await service.create(req.body);
  resHelper.created(res, newCard);
};

exports.update = async (req, res) => {
  const updated = await service.update(req.params.id, req.body);
  return updated
    ? res.status(200).json({ message: 'Tarjeta actualizada correctamente', data: updated })
    : res.status(404).json({ message: 'No se encontró la tarjeta para actualizar.' });
};

exports.remove = async (req, res) => {
  const deleted = await service.remove(req.params.id);
  return deleted
    ? resHelper.deleted(res)
    : res.status(404).json({ message: 'No se encontró la tarjeta para eliminar.' });
};
