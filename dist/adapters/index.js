"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const jwt_authentication_1 = __importDefault(require("../frameworks/express/middlewares/jwt-authentication"));
const user_1 = __importDefault(require("../frameworks/express/router/user"));
const driver_1 = __importDefault(require("../frameworks/express/router/driver"));
const mongoDB_connection_1 = __importDefault(require("../frameworks/database/mongoDB-connection"));
const socket_io_1 = require("../frameworks/socket-io/socket-io");
dotenv.config();
const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '10mb' }));
const server = http_1.default.createServer(app);
const allowedOrigins = [process.env.FRONT_END];
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true
}));
app.use(jwt_authentication_1.default.validateToken);
app.use('/', user_1.default);
app.use('/driver', driver_1.default);
(0, socket_io_1.setUpSocketIO)(server);
if (MONGO_URL) {
    (0, mongoDB_connection_1.default)(MONGO_URL).then(() => {
        server.listen(port, () => console.log(`Server started at http://localhost:${port}`));
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });
}
else {
    console.log('Cannot access the URL from environment');
}
