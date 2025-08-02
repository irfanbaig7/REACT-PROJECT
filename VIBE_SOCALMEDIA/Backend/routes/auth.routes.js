import express from "express"
import {signUp, signIn, signOut} from "../controller/auth.controller.js"
const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/signin", signIn)
authRouter.post("/signout", signOut)

export default authRouter