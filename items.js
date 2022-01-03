const express = require('express');
const router = express.Router()

router.get("/", (req,res)=>{
    const thing = req.query;
    res.send(`Here are a list of ${thing.item}'s to chose from`);
});


module.exports = router;