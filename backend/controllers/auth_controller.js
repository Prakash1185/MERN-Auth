import { userModel } from './../models/user.model.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Signup 
export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await userModel.findOne({
            email
        })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({ name, email, password: hashedPassword })


        res.status(201).json({
            message: "Signup sucessfully",
            success: true,
            newUser
        })


    } catch (error) {
        res.status(500).json({
            message: "Server error !",
            success: false,
        })
    }
}

// Login
export const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(403).json({
                message: "Invalid credentials",
                success: false
            })
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password)
        if (!isPasswordEqual) {
            return res.status(403).json({
                message: "Invalid credentials",
                success: false
            })
        }

        const jwtToken = jwt.sign(
            {
                email: user.email,
                _id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }
        )

        res.status(200).json({
            message: "Login success",
            success: true,
            jwtToken,
            email,
            name: user.name
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            success: false
        })
    }
}