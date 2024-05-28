const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getAllBooks, addbook } = require("../Controllers/BooksController");

const router = express.Router();

router.get("/all", protect, getAllBooks);
router.post("/add", addbook);

module.exports = router;
