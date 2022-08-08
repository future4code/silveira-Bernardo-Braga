import * as jwt from "jsonwebtoken"
import { authenticationData } from "../Types/UniversalTypes"

import dotenv from "dotenv";
dotenv.config();
export const generateToken = (
    payload: authenticationData
): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRATION_TIME
        }
    )
}

export const getTokenData = (
    token: string
): authenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as authenticationData
}  