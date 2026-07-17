const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        address: {
            type: String,
        },

        available: {
            type: Boolean,
            default: true,
        },

        lastDonationDate: {
            type: Date,
        },
      },
     { 
        timestamps: true
     }
);

const Donor = mongoose.model('Donor', DonorSchema);

module.exports = Donor;