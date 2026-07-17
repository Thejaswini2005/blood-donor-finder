const Request = require("../models/requestmodel");

// =====================================
// Create Blood Request
// =====================================
const createRequest = async (req, res) => {
    try {
        const {
            donorId,
            patientName,
            bloodGroup,
            hospitalName,
            city,
            unitsRequired,
            requiredDate,
        } = req.body;

        // Validate required fields
        if (
            !donorId ||
            !patientName ||
            !bloodGroup ||
            !hospitalName ||
            !city ||
            !unitsRequired ||
            !requiredDate
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const request = await Request.create({
            requesterId: req.user.id,
            donorId,
            patientName,
            bloodGroup,
            hospitalName,
            city,
            unitsRequired,
            requiredDate,
        });

        res.status(201).json({
            success: true,
            message: "Blood request created successfully",
            request,
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
// Get My Requests
// =====================================
const getMyRequests = async (req, res) => {
    try {
        const requests = await Request.find({
            requesterId: req.user.id,
        })
        .populate("donorId")
        .populate("requesterId", "username email");

        res.status(200).json({
            success: true,
            count: requests.length,
            requests,
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
// Get All Requests
// =====================================
const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find()
            .populate("requesterId", "username email")
            .populate("donorId");

        res.status(200).json({
            success: true,
            count: requests.length,
            requests,
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
// Update Request Status
// =====================================
const updateRequestStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const request = await Request.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Request status updated successfully",
            request,
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
// Delete Request
// =====================================
const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findByIdAndDelete(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Request deleted successfully",
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
    createRequest,
    getMyRequests,
    getAllRequests,
    updateRequestStatus,
    deleteRequest,
};