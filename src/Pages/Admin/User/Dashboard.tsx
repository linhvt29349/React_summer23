import React from 'react'
import { Link } from "react-router-dom";
import { IUser } from '../../../Types/users';
type ProductProps = {
    users: IUser[];
    onDelete: (id: number) => void
};
const AdminPageUser = ({ users, onDelete }: ProductProps) => {

    return (
        <>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>Accounts Management</h2>
            <Link to={'/admin/user/list/list/add'}><button className="bg-indigo-600 text-white px-[15px] py-[5px] my-[30px] rounded">Add user</button></Link>
            <table className="text-center w-[90%]">
                <thead>
                    <tr className="py-[20px] bg-gray-400 text-white ">
                        <th className="w-[40px] h-[40px]">STT</th>
                        <th className="w-[140px]">Name account</th>
                        <th className="w-[140px]">Email</th>
                        <th className="w-[240px]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>
                                <Link to={`/admin/user/list/user/update/${product.id}`}><button className="bg-indigo-600 text-white px-[15px] py-[5px] mr-[5px] rounded">Update</button></Link>
                                <button className="bg-red-400 text-white px-[15px] py-[5px] rounded" onClick={() => onDelete(product.id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default AdminPageUser