import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { IProduct } from "../Types/products";
import { ICategories } from "../Types/categories";

type ProductProps = {
    products: IProduct[];
    categories: ICategories[]
};

export const Home = ({ products }: ProductProps) => {
    const { id } = useParams()
    const dmProduct = products.filter(p => p.categoryId == Number(id))
    return (
        <div>
            <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 grid grid-cols-4 gap-[20px]  ">
                {dmProduct.map((product, index) => (
                    <div className="border-2 hover:border-red-400 p-[10px] bg-gray-100">
                        <img
                            alt="Home"
                            src={product.image}
                            className="h-56 w-full  rounded-md object-cover"
                        />
                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dd className="text-sm text-gray-500">Name: {product.name}</dd>
                                </div>
                                <div>
                                    <dd className="font-medium">Price: {product.price}</dd>
                                </div>
                            </dl>
                            <div className="mt-6 flex items-center gap-8 text-xs">
                                <div>
                                    <Link to={`/detail/${product.id}`}><button className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring">Deatil</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>))}
            </div>
        </div>

    )
}

export const SidebarI = () => {

    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link to={"/"}><a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">Products</a></Link>

                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> Category </span>

                                <span
                                    className="shrink-0 transition duration-300 group-open:-rotate-180"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">

                                <li>
                                    <Link to={"/categories/1"}><a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"> Category 1</a></Link>
                                </li>

                                <li>
                                    <Link to={"/categories/2"}><a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"> Category 2</a></Link>
                                </li>
                                <li>
                                    <Link to={"/categories/3"}><a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"> Category 3</a></Link>
                                </li>

                                <li>
                                    <Link to={"/categories/4"}><a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"> Category 4</a></Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}








