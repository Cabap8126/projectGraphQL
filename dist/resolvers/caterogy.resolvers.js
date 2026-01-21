"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolversCaterogy = void 0;
const article_model_1 = __importDefault(require("../model/article.model"));
const caterogy_1 = __importDefault(require("../model/caterogy"));
exports.resolversCaterogy = {
    Query: {
        getListCaterogy: () => __awaiter(void 0, void 0, void 0, function* () {
            const caterogy = yield caterogy_1.default.find({
                deleted: false
            });
            return caterogy;
        }),
        getCaterogy: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            const caterogy = yield caterogy_1.default.findOne({
                _id: id,
                deleted: false
            });
        })
    },
    Multation: {
        createCaterogy: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { caterogy } = args;
            const record = new article_model_1.default(caterogy);
            yield record.save();
            return record;
        }),
        updateCaterogy: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id, caterogy } = args;
            yield caterogy_1.default.updateOne({ _id: id, deleted: false }, { caterogy });
            const record = yield caterogy_1.default.findOne({
                _id: id
            });
            return record;
        }),
        deletedCaterogy: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            yield caterogy_1.default.updateOne({ _id: id }, {
                deleted: true,
                deletedAt: new Date()
            });
            return "đã xóa";
        })
    }
};
