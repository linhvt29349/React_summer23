import React from 'react'
import { Link } from "react-router-dom";
import { IProduct, IProps } from '../../../Types/products';
type ProductProps = {
    products: IProduct[];
    onDelete: (id: number) => void
};
const AdminPageProduct = ({ products, onDelete }: ProductProps) => {

    return (
        <>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>Prroducts Management</h2>
            <Link to={"product/add"}><button className="bg-indigo-600 text-white px-[15px] py-[5px] my-[30px] rounded">Add product</button></Link>
            <table className="text-center w-[90%]">
                <thead>
                    <tr className="py-[20px] bg-gray-400 text-white px-[10px] mb-[20px]">
                        <th className="w-[40px] h-[40px]">STT</th>
                        <th className="w-[240px]">Name product</th>
                        <th className="w-[240px]">Price product</th>
                        <th className="w-[140px]">Image product</th>
                        <th className="w-[140px]">Description</th>
                        <th className="w-[240px]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><img src={product.image} alt="" /></td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`product/update/${product.id}`}><button className="bg-indigo-600 text-white px-[15px] py-[5px] mr-[5px] rounded">Update</button></Link>
                                <button className="bg-red-400 text-white px-[15px] py-[5px] rounded" onClick={() => onDelete(product.id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default AdminPageProduct