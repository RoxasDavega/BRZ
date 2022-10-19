const { userCreateSchema, userUpdateSchema, userLoginSchema, userRegisterSchema } = require("./schema");

function validateUserCreatePayload(payload) {
    const validateResult = userCreateSchema(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}

function validateUserUpdatePayload(payload) {
    const validateResult = userUpdateSchema(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}

function validateUserLoginPayload(payload) {
    const validateResult = userLoginSchema(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}

function validateUserRegisterPayload(payload) {
    const validateResult = userRegisterSchema(payload);
    if (validateResult.error) {
        throw new Error(validate.error.message);
    }
}

module.exports = { validateUserCreatePayload, validateUserLoginPayload, validateUserRegisterPayload, validateUserRegisterPayload };