import { instance } from "./instance.jsx";
import { IUser } from "../Types/users.js";

export const signup = (data: IUser) => {
    return instance.post('/users', data)
}

export const signin = (data: IUser) => {
    return instance.post('/users', data)
}

