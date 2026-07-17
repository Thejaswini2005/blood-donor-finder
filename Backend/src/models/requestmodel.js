const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
    {
        requesterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        donorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donor",
            required: true,
        },

        patientName: {
            type: String,
            required: true,
        },

        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true,
        },

        hospitalName: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        unitsRequired: {
            type: Number,
            required: true,
        },

        requiredDate: {
            type: Date,
            required: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Accepted", "Rejected", "Completed"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Request", requestSchema);