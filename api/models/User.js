import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
    { timestamps: true }
);

export default mongoose.model("usercontents", hotelSchema);