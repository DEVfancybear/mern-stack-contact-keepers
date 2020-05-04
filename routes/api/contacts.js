const express = require("express");
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require("../../models/User");
const Contact = require("../../models/Contact");
const auth = require("../../middleware/auth");


// @route GET api/contacts
// @desc Get all users contacts
// @access Public
router.get("/", auth, async (req, res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
        await res.json(contacts);
    } catch (e) {
        console.log(e);
        res.status(500).send("Server Error");
    }
});
// @route POST api/contacts
// @desc Add new contact
// @access Public
router.post("/", (req, res) => {
    res.send("Add new contact")
});

// @route PUT api/contacts
// @desc Update a contact
// @access Public
router.put("/:id", (req, res) => {
    res.send("Update contact")
});

// @route DELETE api/contacts
// @desc Delete a contact
// @access Public
router.delete("/:id", (req, res) => {
    res.send("Delete contact")
});
module.exports = router;