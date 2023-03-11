const express = require("express");
const routers = express.Router();
const nano = require("nano")("http://127.0.0.1:5984");
const  db  = nano.use('users');


// render the singup page
routers.get('/singup', (req , res) => {
    res.render('singup', { alert: ''});
});

// Process the form that have been submitted
routers.post('/singup', (req , res) => {
    const  checkindb = async () => {
        const q = {
            selector: {
                email: {
                    "$eq": `${req.body.email}`
                }
            }
        }
        const data = await db.find(q);
        if (data.docs.length == 0){
            return true
        }
        return false
    };
    (async () => {
       const email = await checkindb();
       if (email) {
         const obj = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            amount: 0,
            terms: req.body.terms,
            addOn: Date()
         }
        db.insert(obj);
        res.redirect('/login');
       } else {
        // rerender THe page and send the alert to the user
        res.render('singup', { alert: 'Sorry This email alreday in use'})
       }
    })();
})





module.exports = routers;