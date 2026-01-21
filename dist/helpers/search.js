"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchHelpers = (queri) => {
    let ObjectSearch = {
        keyword: ""
    };
    if (queri.keyword) {
        ObjectSearch.keyword = queri.keyword;
        const regex = new RegExp(ObjectSearch.keyword, "i");
        ObjectSearch.regex = regex;
    }
    return ObjectSearch;
};
exports.default = searchHelpers;
