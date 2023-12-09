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
const user_getQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/user/user-getQuery"));
const encryptionDecryption_1 = __importDefault(require("../../shared/encryptionDecryption"));
exports.default = {
    login: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_getQuery_1.default.getUserWithEmailId(data.email);
            if (user) {
                const comparePassword = yield encryptionDecryption_1.default.comparePassword(data.password, user.password);
                if (!comparePassword) {
                    throw new Error("Invalid email or password");
                }
                else {
                    const token = encryptionDecryption_1.default.createToken(user._id, "user", "5h");
                    return token || null;
                }
            }
            else {
                throw new Error("User doesn't exists please signup !!!");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    })
};
