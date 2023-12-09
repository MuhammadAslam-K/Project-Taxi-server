import Express from "express";
import signup from "../../../adapters/controllers/driver/signup";
import login from "../../../adapters/controllers/driver/login";
import ride from "../../../adapters/controllers/driver/ride";



const driverRoute = Express.Router()

// AUTH
driverRoute.post("/signup", signup.signup)
driverRoute.post("/login", login.login)

// PROTECTED
driverRoute.get("/ride/search", ride.getRides)
driverRoute.patch("/ride/accept", ride.driverAcceptRide)
driverRoute.get("/ride", ride.ridesByDriverId)

export default driverRoute