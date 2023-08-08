import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { ICategories, IFormInput, IPropsUpdate } from "../../../Types/categories";
import { SchemaCategory } from "../../../Types/categories";


const UpdateCategories = (props: IPropsUpdate) => {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm<IFormInput>()
    const navigate = useNavigate()
    let hobbies = ['spring', 'java'];
    console.log(hobbies);
    useEffect(() => {
        const curentProduct = props.categories.find((product) => product.id === Number(id))
        reset(curentProduct)
    }, [props])
    const onhandleSubmit: SubmitHandler<IFormInput> = (data: ICategories) => {
        const { error } = SchemaCategory.validate(data)
        if (error) {
            alert(error.message)
        } else {
            props.onEdit(data)
            alert("Update successful!")
            navigate('/admin/categories/list')
        }
    }
    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center ">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Update Category!</h1>
                    </div>

                    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(onhandleSubmit)}>
                        <div>
                            <label className="font-bold">Name category</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('name')}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter name..."
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Update category!
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </div>
    )

}
export default UpdateCategories