import User from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {

    try {
        const userId = req.userId
        const user = await User.findById(userId)
        if (!user) {
            return res.status(400).json({ message: "User not Found" })
        }

        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: `getCurrentUser Error ${error}` });
    }

}   