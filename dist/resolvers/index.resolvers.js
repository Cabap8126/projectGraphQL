"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const article_resolvers_1 = require("./article.resolvers");
const caterogy_resolvers_1 = require("./caterogy.resolvers");
const user_resolvers_1 = require("./user.resolvers");
exports.resolvers = [
    article_resolvers_1.resolversArticle,
    caterogy_resolvers_1.resolversCaterogy,
    user_resolvers_1.resolversUser
];
