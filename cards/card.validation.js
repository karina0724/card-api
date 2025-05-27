const Joi = require('joi');

exports.create = Joi.object({
  number: Joi.string()
    .pattern(/^\d{16}$/)
    .required()
    .messages({
      'string.pattern.base': 'El número de tarjeta debe contener exactamente 16 dígitos numéricos.',
      'string.empty': 'El número de tarjeta es obligatorio.',
      'any.required': 'El número de tarjeta es obligatorio.'
    }),
  holder: Joi.string()
    .pattern(/^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/)
    .max(20)
    .required()
    .messages({
      'string.pattern.base': 'El nombre debe contener solo letras y espacios.',
      'string.empty': 'El nombre del titular es obligatorio.',
      'any.required': 'El nombre del titular es obligatorio.'
    }),
  expiry: Joi.string()
    .pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    .required()
    .messages({
      'string.pattern.base': 'La fecha debe estar en formato MM/YY.',
      'string.empty': 'La fecha de vencimiento es obligatoria.',
      'any.required': 'La fecha de vencimiento es obligatoria.'
    }),
  cvv: Joi.string()
    .pattern(/^\d{3}$/)
    .required()
    .messages({
      'string.pattern.base': 'El CVV debe contener 3 dígitos numéricos.',
      'string.empty': 'El CVV es obligatorio.',
      'any.required': 'El CVV es obligatorio.'
    })
});

exports.update = Joi.object({
  number: Joi.string()
    .pattern(/^\d{16}$/)
    .messages({
      'string.pattern.base': 'El número de tarjeta debe contener exactamente 16 dígitos numéricos.'
    }),
  holder: Joi.string()
    .pattern(/^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/)
    .max(20)
    .messages({
      'string.pattern.base': 'El nombre debe tener solo letras y espacios.',
      'string.max': 'El nombre no puede superar los 20 caracteres.'
    }),
  expiry: Joi.string()
    .pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    .messages({
      'string.pattern.base': 'La fecha debe estar en formato MM/YY.'
    }),
  cvv: Joi.string()
    .pattern(/^\d{3}$/)
    .messages({
      'string.pattern.base': 'El CVV debe contener 3 dígitos numéricos.'
    })
});
