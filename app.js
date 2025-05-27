const express = require('express');
const cors = require('cors');
const cardRoutes = require('./cards/card.routes');
const { error } = require('./utils/response');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.use('/cards', cardRoutes);

// Catch Joi validation errors (for safety, though you're using your own middleware)
app.use((err, req, res, next) => {
  if (err?.error?.isJoi) {
    const messages = err.error.details.map(d => d.message);
    return res.status(400).json({
      message: 'Validación fallida',
      errors: messages
    });
  }
  next(err);
});

// Generic error handler
app.use((err, req, res, next) => {
  error(res, err.status || 500, err.message || 'Error interno del servidor');
});

module.exports = app;
