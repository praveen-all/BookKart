const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const { addOrder, orderByUserId } = require("../Controllers/OrderController");

const router = express.Router();

router.post("/add", protect, addOrder);
router.get("/getbyid", protect, orderByUserId);

module.exports = router;
