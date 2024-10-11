const express = require('express')
const router = express.Router()

const userdata = async (req, res) => {
    res.status(200).json({ msg: "User data fetched successfully" })
}
module.exports = userdata