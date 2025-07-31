import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"


export const signUp = async (req, res) => {
    try {
        const { name, username, password, email } = req.body

        // check if username and email was already exist or not?
        const findByEmail = await User.findOne({ email });
        if (findByEmail) {
            return res.status(400).json({ message: "Email already exists!!" });
        }

        const findByUsername = await User.findOne({ username });
        if (findByUsername) {
            return res.status(400).json({ message: "Username already exists!!" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be 6 character !!" });
        }

        // now here we bcyrpt the password for more security purpose
        const hashedPassword = await bcrypt.hash(password, 10);


        // and finally we have new email, username and our password was become hashed so we can create user now
        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });


        // generate a token and storing them into cookie
        const token = genToken(user._id)

        // now this Token store into Cookies
        res.cookie("jwtToken", token, {
            httpOnly: true,
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
            secure: false,
            sameSite: "Strict"
        })

        // And finally we are returing the response
        return res.status(201).json(user)

    } catch (error) {
        res.status(500).json({ message: `SignUP Error ${error}` });

    }
}


export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User Not Found !!" });
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password !!" });
        }

        const token = genToken(user._id)

        res.cookie("jwtToken", token, {
            httpOnly: true,
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
            secure: false,
            sameSite: "Strict"
        })

        return res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: `SignIn Error ${error}` });

    }
}


export const signOut = async (req, res) => {
    try {
        res.clearCookie("jwtToken")
        return res.status(200).json({message: "Sign Out Successfully"})
    } catch (error) {
        res.status(500).json({ message: `SignOut Error ${error}` });
    }
}