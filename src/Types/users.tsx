import Joi from "joi"
import { IRole } from "./auth"
export const SchemaUser = Joi.object({
    id: Joi.number(),
    name: Joi.string().trim(true).required().messages({
        "string.empty": "{lable}Required field!"
    }),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        "string.empty": "{lable}Required field!",
        "string.email": "{lable}Email is not in the correct format!"
    }),
    password: Joi.string().trim().min(6).required().messages({
        "string.empty": "{lable}Required field!",
        "string.min": "{lable}Password minimum 6 characters!"
    }),
    password_confirmation: Joi.string().valid(Joi.ref('password')).messages({
        "any.only": "Confirm password not matching!"
    }),
    roleId: Joi.number()
})
export const SchemaSignIn = Joi.object({
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        "string.empty": "{lable}Required field!",
        "string.email": "{lable}Email is not in the correct format!"
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required().messages({
        "string.empty": "{lable}Required field!",
        "string.min": "{lable}Password minimum 6 characters!"
    })
})
export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    password_confirmation?: string,
    roleId: number
}
export interface IProps {
    onAdd: (product: IUser) => void
}

export interface IFormInput {
    id: number,
    name: string,
    email: string,
    password: string,
    password_confirmation?: string,
    roleId: number
}
export interface IPropsUpdate {
    roles: IRole[],
    users: IUser[],
    onEdit: (product: IUser) => void
}
