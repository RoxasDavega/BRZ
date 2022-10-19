const jwt = require("jsonwebtoken");

const accessSecretKey = "rosyid-ganteng-abis";

function generateAccessToken(userPayload) {
    return jwt.sign(userPayload, accessSecretKey, {
        subject: userPayload.name,
        expiresIn: "15m",
    });
}

module.exports = generateAccessToken;