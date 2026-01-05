const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({
    message: "Hello from Node.js API"
  });
});

module.exports = router;   // 👈 THIS LINE IS VERY IMPORTANT
