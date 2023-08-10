import Joi from "joi"
import { ICategories } from "./categories"
export const SchemaProduct = Joi.object({
    id: Joi.number(),
    name: Joi.string().trim(true).required().messages({
        "string.empty": "{lable}Required field!"
    }),
    price: Joi.number().min(0).required().messages({
        "string.empty": "{lable}Required field!",
        "string.min": "{lable}Enter price as a positive number!"
    }),
    image: Joi.string().trim().required().messages({
        "string.empty": "{lable}Required field!"
    }),
    description: Joi.string().trim().required().messages({
        "string.empty": "{lable}Required field!"
    }),
    categoryId: Joi.number()
})

export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: number

}
export interface IProps {
    onAdd: (product: IProduct) => void
}


export interface IPropsUpdate {
    categories: ICategories[],
    products: IProduct[],
    onEdit: (product: IProduct) => void
}

export interface IFormInput {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: number
}
