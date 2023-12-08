import Express from "express";
import signup from "../../../adapters/controllers/user/signup";
import login from "../../../adapters/controllers/user/login";
import booking from "../../../adapters/controllers/user/booking";
import rides from "../../../adapters/controllers/user/rides";



const userRoute = Express.Router()

// PUBLIC
userRoute.post("/signup", signup.signup)
userRoute.post("/login", login.login)

// PROTECTED
userRoute.post("/booking", booking.booking)


userRoute.get("/rides", rides.getRidesOfUser)


export default userRoute