const { createArticle, updateArticle } = require("./schema");

function validateCreateArticle(payload) {
    const validateResult = createArticle(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}

function validateUpdateArticle(payload) {
    const validateResult = updateArticle(payload);
    if (validateResult.error) {
        throw new Error(validateResult.error.message);
    }
}