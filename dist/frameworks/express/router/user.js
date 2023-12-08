"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("../../../adapters/controllers/user/signup"));
const login_1 = __importDefault(require("../../../adapters/controllers/user/login"));
const booking_1 = __importDefault(require("../../../adapters/controllers/user/booking"));
const rides_1 = __importDefault(require("../../../adapters/controllers/user/rides"));
const userRoute = express_1.default.Router();
// PUBLIC
userRoute.post("/signup", signup_1.default.signup);
userRoute.post("/login", login_1.default.login);
// PROTECTED
userRoute.post("/booking", booking_1.default.booking);
userRoute.get("/rides", rides_1.default.getRidesOfUser);
exports.default = userRoute;
