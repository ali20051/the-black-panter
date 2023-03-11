const express = require("express");
const router = express.Router();
const nano = require("nano")("http://127.0.0.1:5984");
const db = nano.use("users");


router.get('/dashboard', (req , res) => {
      res.render('dash', { displayname: "Jack", amount: 50000, id: "A123456789", history: [] });
});







module.exports = router;
