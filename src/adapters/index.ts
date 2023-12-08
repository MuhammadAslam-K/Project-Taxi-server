import Express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import http from 'http'
import jwtTokenAuth from "../frameworks/express/middlewares/jwt-authentication"
import userRoute from '../frameworks/express/router/user';
import connect from '../frameworks/database/mongoDB-connection';
import driverRoute from '../frameworks/express/router/driver';


dotenv.config()

const port = process.env.PORT
const MONGO_URL = process.env.MONGO_URL;
const app = Express();
app.use(cors());
app.use(Express.json({ limit: '10mb' }));

const server = http.createServer(app);

const allowedOrigins = [process.env.FRONT_END];
app.use(
    cors({
        origin: "*",
        credentials: true
    }),
)
app.use(jwtTokenAuth.validateToken);

app.use('/', userRoute);
app.use('/driver', driverRoute);





if (MONGO_URL) {
    connect(MONGO_URL).then(() => {
        server.listen(port, () => console.log(`Server started at http://localhost:${port}`));
    }).catch((err: Error) => {
        console.error('MongoDB connection error:', err);
    });
} else {
    console.log('Cannot access the URL from environment');
}


