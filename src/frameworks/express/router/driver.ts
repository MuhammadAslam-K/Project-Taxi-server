import Express from "express";
import signup from "../../../adapters/controllers/driver/signup";



const driverRoute = Express.Router()

// AUTH
driverRoute.post("/signup", signup.signup)

export default driverRoute