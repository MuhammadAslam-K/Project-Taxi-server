import mongoose, { Schema } from "mongoose";


const driverSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const DriverSchema = mongoose.model("driver", driverSchema);

export default DriverSchema;
