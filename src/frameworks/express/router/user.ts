import Express from "express";
import signup from "../../../adapters/controllers/user/signup";
import login from "../../../adapters/controllers/user/login";
import booking from "../../../adapters/controllers/user/booking";



const userRoute = Express.Router()

// PUBLIC
userRoute.post("/signup", signup.signup)
userRoute.post("/login", login.login)

// PROTECTED
userRoute.post("/booking", booking.booking)

export default userRoute