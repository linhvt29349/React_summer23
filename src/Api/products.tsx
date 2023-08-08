import { instance } from "./instance.jsx";
import { IProduct } from '../Types/products.js'

export const getAllProducts = () => {
    return instance.get('/products')
}
export const getOneProduct = (id: number) => {
    return instance.get('/products/' + id)
}
export const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id)
}
export const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
export const updateProduct = (product: IProduct) => {
    return instance.put('/products/' + product.id, product)
}
