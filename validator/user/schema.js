const Joi = require("joi");

const userCreateSchema = Joi.object({
    name: Joi.string().min(3).require(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).require(),
    role: Joi.string().min(3).require(),
    noHP: Joi.string().min(9).required(),
}).unknow();

const userUpdateSchema = Joi.object({
    name: Joi.string().min(3).require(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).require(),
    noHP: Joi.string().min(9).required(),
}).unknown();

const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).require(),
}).unknown();

const userRegisterSchema = Joi.object({
    name: Joi.string().min(3).require(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).require(),
    role: Joi.string().min(3).require(),
    noHP: Joi.string().min(9).required(),
}).unknown();

module.exports = { userCreateSchema, userLoginSchema, userUpdateSchema, userRegisterSchema };