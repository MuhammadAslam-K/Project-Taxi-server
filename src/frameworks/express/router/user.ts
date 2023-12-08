import Express from "express";
import signup from "../../../adapters/controllers/user/signup";



const userRoute = Express.Router()

// AUTH
userRoute.post("/signup", signup.signup)

export default userRoute