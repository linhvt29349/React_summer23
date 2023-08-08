import { instance } from "./instance.jsx";
import { ICategories } from '../Types/categories.js'
import axios from "axios";
export const getAllCategorys = () => {
    return instance.get('/categories')
}
export const getOneCategory = (id: number) => {
    return instance.get('/categories/' + id)
}
export const deleteCategory = (id: number) => {
    return instance.delete('/categories/' + id)
}
export const addCategory = (product: ICategories) => {
    return instance.post('/categories', product)
}
export const updateCategory = (product: ICategories) => {
    return instance.put('/categories/' + product.id, product)
}