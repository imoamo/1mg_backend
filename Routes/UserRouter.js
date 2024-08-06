const express = require('express');
const userRouter = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

// Registering the User
userRouter.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const user_exist = await userModel.findOne({ email });

    if (user_exist) {
        res.status(500).json({
            message: "user already registered"
        });

    } else {

        try {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.status(500).json({
                        message: "Error while hasing the password"
                    });
                } else {
                    const user = new userModel({ username, email, password: hash });
                    await user.save();
                    res.status(201).json({
                        message: "User register Successfully"
                    });
                };
            });

        } catch (error) {
            res.status(500).json({
                message: "Error while registering the user", error
            });
        }
    }
});

// Login the User
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        user_exist = await userModel.findOne({ email });

        if (user_exist) {
            bcrypt.compare(password, user_exist.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userId: user_exist._id, user: user_exist.username }, 'masai');
                    res.status(200).json({
                        message: "User Logged in Successfully", token
                    });

                } else {
                    res.status(401).json({
                        message: "Wrong Password!"
                    });
                }
            });

        } else {
            res.status(404).json({
                message: "User not found, please register first"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "Error while logging in the user", error
        });
    }
});

module.exports = userRouter