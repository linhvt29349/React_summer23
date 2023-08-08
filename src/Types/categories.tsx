import Joi from 'joi'
export const SchemaCategory = Joi.object({
    name: Joi.string().trim(true).required().messages({
        "string.empty": "{lable}Required field!"
    })
})
export interface ICategories {
    id: number,
    name: string
}
export interface IProps {
    onAdd: (product: ICategories) => void
}

export interface IFormInput {
    id: number,
    name: string,
}
export interface IPropsUpdate {
    categories: ICategories[],
    onEdit: (product: ICategories) => void
}
