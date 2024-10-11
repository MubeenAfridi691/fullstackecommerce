const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    Roll: {
        type: String,
        required: true,
        default: 'general'
    },
}, {
    timestamps: true // Place it here as the second argument
});

const User = mongoose.model('User', UserSchema);
module.exports = User; // Ensure this line exists
