const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authmiddleware");

const {
    createRequest,
    getMyRequests,
    getAllRequests,
    updateRequestStatus,
    deleteRequest,
    getDonorRequests,
} = require("../controllers/requestcontroller");

// Protected Routes
router.post("/", authMiddleware, createRequest);
router.get("/my", authMiddleware, getMyRequests);
router.get(
    "/donor",
    authMiddleware,
    getDonorRequests
);

// Public/Admin Routes
router.get("/", getAllRequests);

// Update Request Status
router.put("/:id/status", authMiddleware, updateRequestStatus);

// Delete Request
router.delete("/:id", authMiddleware, deleteRequest);

module.exports = router;