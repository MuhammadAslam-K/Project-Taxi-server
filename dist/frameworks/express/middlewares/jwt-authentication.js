"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encryptionDecryption_1 = __importDefault(require("../../../business/shared/encryptionDecryption"));
exports.default = {
    validateToken: (req, res, next) => {
        try {
            const requestedRoute = req.path;
            console.log("path :", requestedRoute);
            const publicRoutes = [
                /**********  User **********/
                "/signup",
                "/login",
                /**********  DRIVER **********/
                "/driver/signup",
                "/driver/login",
            ];
            if (publicRoutes.includes(requestedRoute)) {
                return next();
            }
            const authorizationHeader = req.header('Authorization');
            if (!authorizationHeader) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const token = authorizationHeader.replace('Bearer ', '');
            const decodedToken = encryptionDecryption_1.default.decryptToken(token);
            const userRouteSegment = '/';
            const driverRouteSegment = '/driver';
            const adminRouteSegment = '/admin';
            let validRole = false;
            if (requestedRoute.startsWith(userRouteSegment) && decodedToken.role === 'user') {
                validRole = true;
            }
            else if (requestedRoute.startsWith(driverRouteSegment) && decodedToken.role === 'driver') {
                validRole = true;
            }
            else if (requestedRoute.startsWith(adminRouteSegment) && decodedToken.role === 'admin') {
                validRole = true;
            }
            if (validRole) {
                req.token = decodedToken;
                next();
            }
            else {
                return res.status(401).json({ error: 'Unauthorized' });
            }
        }
        catch (error) {
            console.log("error in jwt ", error);
            return res.status(401).json({ error: error.message });
        }
    },
};
