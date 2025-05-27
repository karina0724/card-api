exports.ok = (res, data) => res.status(200).json(data);

exports.created = (res, data) => res.status(201).json({
  message: 'Tarjeta creada exitosamente',
  data
});

exports.notFound = (res) => res.status(404).json({
  message: 'Recurso no encontrado'
});

exports.deleted = (res) => res.status(200).json({
  message: 'Tarjeta eliminada correctamente'
});

exports.error = (res, status = 500, message = 'Error interno del servidor') =>
  res.status(status).json({ message });

