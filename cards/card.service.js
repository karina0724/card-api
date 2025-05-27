const repository = require('./card.repository');
const { v4: uuidv4 } = require('uuid');

exports.getAll = () => repository.findAll();

exports.getById = (id) => repository.findById(id);

exports.create = async (data) => {
  const allCards = await repository.findAll();

  const exists = allCards.some(card => card.number.trim() === data.number.trim());

  if (exists) {
    const error = new Error('Ya existe una tarjeta con ese número.');
    error.status = 400;
    throw error;
  }

  const card = { id: uuidv4(), ...data };
  return repository.save(card);
};

exports.update = async (id, data) => {
  const existing = await repository.findById(id);
  if (!existing) return null;

  const updated = { ...existing, ...data };
  return repository.update(id, updated);
};

exports.remove = (id) => repository.delete(id);
