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
const user_saveQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/user/user-saveQuery"));
const encryptionDecryption_1 = __importDefault(require("../../shared/encryptionDecryption"));
exports.default = {
    registration: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [emailExists, mobileExists] = yield Promise.all([
                user_getQuery_1.default.getUserWithEmailId(data.email),
                user_getQuery_1.default.getUserWithMobileNo(data.mobile)
            ]);
            if (emailExists)
                throw new Error("User Exists please login !!!");
            if (mobileExists)
                throw new Error("User with same Mobile No already exists");
            const hashPassword = yield encryptionDecryption_1.default.hashPassword(data.password);
            data.password = hashPassword;
            const result = yield user_saveQuery_1.default.saveUser(data);
            return !!result;
        }
        catch (error) {
            throw new Error(error.message);
        }
    })
};
