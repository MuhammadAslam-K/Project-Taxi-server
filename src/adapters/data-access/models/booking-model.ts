import mongoose, { Schema } from "mongoose";


const bookingSchema: Schema = new Schema({

    user_id: {
        type: String,
        require: true
    },
    driver_id: {
        type: String,
    },
    pickupLocation: {
        type: String,
        require: true
    },
    dropLocation: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "Pending"
    },
    driverStatus: {
        type: String,
        default: "Pending"
    }

});

const BookingSchema = mongoose.model("booking", bookingSchema)

export default BookingSchema