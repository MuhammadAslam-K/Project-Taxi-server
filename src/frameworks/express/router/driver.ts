import Express from "express";
import signup from "../../../adapters/controllers/driver/signup";
import login from "../../../adapters/controllers/driver/login";



const driverRoute = Express.Router()

// AUTH
driverRoute.post("/signup", signup.signup)
driverRoute.post("/login", login.login)

export default driverRoute