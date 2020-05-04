const express = require("express");
const router = express.Router();
// @route GET api/contacts
// @desc Get all users contacts
// @access Public
router.get("/", (req, res) => {
    res.send("Get all contacts")
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