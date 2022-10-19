const Joi = require('joi');

const createArticle = Joi.object({
    judul: Joi.string().min(3).require(),
    genre: Joi.string().min(3).required(),
    slug: Joi.string().required(),
    body: Joi.string().min(10).required(),
    UserId: Joi.number().required(),
}).unknown();

const updateArticle = Joi.object({
    judul: Joi.string().min(3).require(),
    genre: Joi.string().min(3).required(),
    slug: Joi.string().required(),
    body: Joi.string().min(10).required(),
    UserId: Joi.number().required(),
}).unknown();

module.exports = { createArticle, updateArticle };