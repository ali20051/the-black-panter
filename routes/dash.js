const express = require("express");
const router = express.Router();
const nano = require("nano")("http://127.0.0.1:5984");
const db = nano.use("users");


router.get('/dashboard', (req , res) => {
      res.render('dash', { displayname: "Jack", amount: 50000, id: "A123456789", history: [
      {
      "where": "Apple"
    },
    {
      "where": "Wallmart"
    },
    {
      "where": "Netflix"
    },
    {
      "where": "HBO+"
    },
    {
      "where": "Margan co."
    },
    {
      "where": "Orange"
    },
    {
      "where": "Maroc Telecom"
    },
    {
      "where": "elba.com"
    },
    {
      "where": "Best Buy"
    },
    {
      "where": "Costo"
    },
    {
      "where": "1$ Store"
    },
    {
      "where": "Donation To Charety"
    },
    {
      "where": "Play Store"
    },
    {
      "where": "Google"
    },
    {
      "where": "Baby Store"
    }
   ] });
});







module.exports = router;
