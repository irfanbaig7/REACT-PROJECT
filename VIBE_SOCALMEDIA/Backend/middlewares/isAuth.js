import jwt from "jsonwebtoken"


const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.jwtToken
        if (!token) {
            return res.status(400).json({message: "Token is not Found"})
        }

        const verifyToken = await jwt.verify(token, process.env.JWT_SECRET)

        req.userId = verifyToken.userId

        next()

    } catch (error) {
        res.status(500).json({message: `is Auth error ${error}`})
    }
}

export default isAuth 