import { Link } from "react-router-dom"
import React from "react"

const HomePage = ({ products }) => {

    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map(product => {
                return (
                    <div key={product?.id} className="border-2 w-full h-[350px] p-[10px] rounded hover:border-red-400 bg-gray-100">
                        <img src={product?.image} alt="" className="w-full h-56 rounded" />
                        <h2 className="text-sm text-gray-500">Name: {product?.name}</h2>
                        <p className="font-medium">Price: {product?.price}</p>
                        <Link to={`/detail/${product.id}`}><button className=" my-[10px] block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring">Detail</button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage