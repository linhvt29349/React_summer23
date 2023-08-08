import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { IFormInput, IProps, IPropsUpdate, IUser } from "../../../Types/users";
import { useForm, SubmitHandler } from 'react-hook-form'
import { SchemaUser } from "../../../Types/users";
import { IRole } from "../../../Types/auth";
import bcrypt from 'bcryptjs-react'


type User = {
    roles: IRole[],
    onAdd: (product: IUser) => void
}
const AddUser = (props: User) => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const navigate = useNavigate();
    const onFinish = (values: IUser) => {
        const { error } = SchemaUser.validate(values)
        const user = {
            id: new Date().getTime(),
            name: values.name,
            email: values.email,
            password: bcrypt.hashSync(values.password, 10),
            roleId: values.roleId
        }
        if (error) {
            alert(error.message)
        } else {
            props.onAdd(user);
            alert("Account created successfully!")
            navigate("/admin/categories/list")
        }
    };
    return (
        <div>
            <div>
                <section className="relative flex flex-wrap lg:h-screen lg:items-center ">
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg text-center">
                            <h1 className="text-2xl font-bold sm:text-3xl">Add User!</h1>
                        </div>

                        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(onFinish)}>
                            <div>
                                <label className="font-bold">Name</label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        {...register('name')}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter name..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-bold">Email</label>

                                <div className="relative">
                                    <input
                                        type="email"
                                        {...register('email')}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter name..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-bold">Password</label>

                                <div className="relative">
                                    <input
                                        type="password"
                                        {...register('password')}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter name..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-bold">Password Confirm</label>

                                <div className="relative">
                                    <input
                                        type="password"
                                        {...register('password_confirmation')}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter name..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-bold">Role</label>

                                <div className="relative">
                                    <select name="roleId">
                                        {props.roles.map((p, index) => {
                                            return (
                                                <option {...register('roleId')} className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" key={index} value={p.id}>{p.name}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                >
                                    Add user
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


        </div>
    )

}
export default AddUser