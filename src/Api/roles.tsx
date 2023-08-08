import { instance } from "./instance.jsx";
import { IRole } from "../Types/auth.js";

export const getAllRoles = () => {
    return instance.get('/roles')
}
export const getOneRole = (id: number) => {
    return instance.get('/roles/' + id)
}
export const deleteRole = (id: number) => {
    return instance.delete('/roles/' + id)
}
export const addRole = (product: IRole) => {
    return instance.post('/roles', product)
}
export const updateRole = (product: IRole) => {
    return instance.put('/roles/' + product.id, product)
}