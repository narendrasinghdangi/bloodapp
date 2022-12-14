import mongoose from "mongoose";

const ngoSchema = mongoose.Schema({
    Unique_Registration_ID: {
        type: Number,
        unique: true,
        required: true,
        primaryKey: true,
    },
    NGO_Name: {
        type: String,
        required: true,
    },

    Date_of_Registration: Date,
    NGO_Type: String,
    NGO_Url: String,
    NGO_Address: String,
    NGO_State: String,
    NGO_District: String,

    NGO_PAN_Number: {
        type: String,
        unique: true,
        required: true,
    },
    CSR_Number: {
        type: String,
        required: true,
        unique: true,
    },
    NGO_Niti_Ayog: {
        type: String,
        required: true,
        unique: true,
    },
    NGO_Annual_Report: String,

});

export default mongoose.model("ngocontents", ngoSchema);