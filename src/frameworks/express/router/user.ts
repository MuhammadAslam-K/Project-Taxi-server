import Express from "express";
import signup from "../../../adapters/controllers/user/signup";
import login from "../../../adapters/controllers/user/login";



const userRoute = Express.Router()

// AUTH
userRoute.post("/signup", signup.signup)
userRoute.post("/login", login.login)

export default userRoute