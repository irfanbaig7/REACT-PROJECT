
import jwt from "jsonwebtoken"

const genToken = (userId) => {
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET)
        return token
    } catch (error) {
        console.log(error);
        return res.status(500).json(`Gen token error ${error}`);
    }
}

export default genToken