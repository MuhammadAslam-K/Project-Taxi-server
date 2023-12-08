import mongoose, { Schema } from "mongoose";


const userSchema: Schema = new Schema({
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

const UserSchema = mongoose.model("user", userSchema);

export default UserSchema;
