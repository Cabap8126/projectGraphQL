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
exports.resolversUser = void 0;
const generate_1 = require("../helpers/generate");
const user_1 = __importDefault(require("../model/user"));
const md5_1 = __importDefault(require("md5"));
exports.resolversUser = {
    Query: {
        getUser: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const infoUser = yield user_1.default.findOne({
                token: context["user"].token,
                deleted: false
            });
            if (infoUser) {
                return {
                    code: 200,
                    message: "Thành Công",
                    id: infoUser.id,
                    fullName: infoUser.fullName,
                    email: infoUser.email,
                    token: infoUser.token
                };
            }
        })
    },
    Multation: {
        resgisterUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { user } = args;
            const emailExit = yield user_1.default.findOne({
                email: user.email,
                deleted: false
            });
            if (emailExit) {
                return {
                    code: 400,
                    message: "Email đã tồn tại"
                };
            }
            else {
                user.password = (0, md5_1.default)(user.password);
                user.token = (0, generate_1.generateTokrn)(30);
                const newUser = new user_1.default(user);
                const data = yield newUser.save();
                return {
                    code: 200,
                    message: "Thành Công",
                    data: data
                };
            }
        }),
        loginUser: (__, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = args.user;
            const infoUser = yield user_1.default.findOne({
                email: email,
                deleted: false
            });
            if (infoUser) {
                return {
                    code: 400,
                    message: "Email Không Tồn Tại"
                };
            }
            if ((0, md5_1.default)(password) !== infoUser.password) {
                return {
                    code: 400,
                    message: "Sai Mật Khẩu"
                };
            }
            return {
                code: 200,
                message: "Thành Công",
                infoUser: infoUser
            };
        })
    }
};
