const Donor = require('../models/donormodel');

// =====================================
// Create Donor Profile
// =====================================
const createDonor = async (req, res) => {
    try {
        const {
            bloodGroup,
            age,
            gender,
            mobileNumber,
            city,
            state,
            address,
            lastDonationDate,
        } = req.body;

        // Check if donor profile already exists
        const existingDonor = await Donor.findOne({
            userId: req.user.id,
        });

        if (existingDonor) {
            return res.status(400).json({
                success: false,
                message: "Donor profile already exists",
            });
        }

        const donor = await Donor.create({
            userId: req.user.id,
            bloodGroup,
            age,
            gender,
            mobileNumber,
            city,
            state,
            address,
            lastDonationDate,
        });

        res.status(201).json({
            success: true,
            message: "Donor profile created successfully",
            donor,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =====================================
// Get All Donors
// =====================================
const getDonors = async (req, res) => {
    try {
        const donors = await Donor.find().populate(
            "userId",
            "username email"
        );

        res.status(200).json({
            success: true,
            count: donors.length,
            donors,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =====================================
// Get Logged-in Donor Profile
// =====================================
const getMyProfile = async (req, res) => {
    try {
        const donor = await Donor.findOne({
            userId: req.user.id,
        }).populate("userId", "username email");

        if (!donor) {
            return res.status(404).json({
                success: false,
                message: "Donor profile not found",
            });
        }

        res.status(200).json({
            success: true,
            donor,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =====================================
// Update Donor Profile
// =====================================
const updateDonor = async (req, res) => {
    try {
        const {
            bloodGroup,
            age,
            gender,
            mobileNumber,
            city,
            state,
            address,
            lastDonationDate,
            available,
        } = req.body;

        const donor = await Donor.findOneAndUpdate(
            { userId: req.user.id },
            {
                bloodGroup,
                age,
                gender,
                mobileNumber,
                city,
                state,
                address,
                lastDonationDate,
                available,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!donor) {
            return res.status(404).json({
                success: false,
                message: "Donor profile not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Donor profile updated successfully",
            donor,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =====================================
// Delete Donor Profile
// =====================================
const deleteDonor = async (req, res) => {
    try {
        const donor = await Donor.findOneAndDelete({
            userId: req.user.id,
        });

        if (!donor) {
            return res.status(404).json({
                success: false,
                message: "Donor profile not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Donor profile deleted successfully",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =====================================
// Search Donors
// =====================================
const searchDonors = async (req, res) => {
    try {
        const { bloodGroup, city, state } = req.query;

        const filter = {
            available: true,
        };

        if (bloodGroup) {
            filter.bloodGroup = bloodGroup;
        }

        if (city) {
            filter.city = city;
        }

        if (state) {
            filter.state = state;
        }

        const donors = await Donor.find(filter).populate(
            "userId",
            "username email"
        );

        res.status(200).json({
            success: true,
            count: donors.length,
            donors,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    createDonor,
    getDonors,
    getMyProfile,
    updateDonor,
    deleteDonor,
    searchDonors,
};