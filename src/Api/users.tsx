import { instance } from "./instance.jsx";
import { IUser } from '../Types/users.js'

export const getAllUsers = () => {
    return instance.get('/users')
}
export const getOneUser = (id: number) => {
    return instance.get('/users/' + id)
}
export const deleteUser = (id: number) => {
    return instance.delete('/users/' + id)
}
export const addUser = (product: IUser) => {
    return instance.post('/users', product)
}
export const updateUser = (product: IUser) => {
    return instance.put('/users/' + product.id, product)
}