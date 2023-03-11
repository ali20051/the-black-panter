const express = require("express");
const router = express.Router();
const nano = require("nano")("http://127.0.0.1:5984");
const db = nano.use("users");


router.get('/dashboard', (req , res) => {
    const getUserData = async () => {
        const getFromDB = await db.get("94432c8463b83dc85c49ed829600022d");
        return getFromDB
    }    
    (async () => {
         const data = await getUserData();
         res.render('dash', { displayname: data.displayname, amount: data.amount, id: data.appid, history: data.history });
    })();
});







module.exports = router;