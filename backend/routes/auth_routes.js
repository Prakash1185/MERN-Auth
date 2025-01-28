import { Router } from "express";
import { signUpValidation } from "../middlewares/auth_validator.js"
import { login, signUp } from './../controllers/auth_controller.js';
const userRouter = Router()

userRouter.post('/signup', signUpValidation, signUp)
userRouter.post('/login', login)


export default userRouter