"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genarateNumber = exports.generateTokrn = void 0;
const generateTokrn = (length) => {
    const characters = 'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijkmnopqrstuwxyz0123456789';
    let token = "";
    for (let i = 0; i < length; i += 1) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
};
exports.generateTokrn = generateTokrn;
const genarateNumber = (length) => {
    const characters = '0123456789';
    let token = "";
    for (let i = 0; i < length; i += 1) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
};
exports.genarateNumber = genarateNumber;
