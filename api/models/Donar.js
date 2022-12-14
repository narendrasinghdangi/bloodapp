import mongoose from "mongoose";

const donarSchema = mongoose.Schema({
    donarname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    aadhar: {
        type: Number,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    times: {
        type: Number,
    },

    address: {
        type: String,
        required: true
    },
    orgId: {
        type: String,
        required: true
    }
});

export default mongoose.model("donarcontents", donarSchema);