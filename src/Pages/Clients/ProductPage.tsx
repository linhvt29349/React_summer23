import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = ({ products }) => {
    const { id } = useParams()
    const product = products.find((product) => product.id === Number(id))

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-[10px]">Product details</h2>
            <div key={product?.id} className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{product?.name}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Price</dt>
                        <dd className="text-gray-700 sm:col-span-2">{product?.price}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">{product?.description}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                    >
                        <dt className="font-medium text-gray-900">Image</dt>
                        <dd className="text-gray-700 sm:col-span-2"><img src={product?.image} alt="" /></dd>
                    </div>

                </dl>
            </div>
        </div>
    )
}
export default DetailPage