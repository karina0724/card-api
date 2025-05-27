module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: false,
    errors: {
      label: 'key'
    }
  });

  if (error) {
    const messages = error.details.map(e => e.message);
    return res.status(400).json({
      message: 'Validación fallida',
      errors: messages
    });
  }

  next();
};
