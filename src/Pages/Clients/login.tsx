import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { IFormInput, IUser } from "../../Types/users";
import { SchemaSignIn } from "../../Types/users";
import bcrypt from 'bcryptjs-react'
type ProductProps = {
    users: IUser[];
};
const SignIn = ({ users }: ProductProps) => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const navigate = useNavigate()

    const onSubmit = async (data: IFormInput) => {
        const { error } = SchemaSignIn.validate(data)
        const user = users.find(u => u.email === data.email)

        if (!user) return alert("Account does not exist !")
        const showPass = bcrypt.compareSync(data.password, user.password)
        console.log(showPass);

        if (showPass === false) return alert("Wrong password!")
        if (error) {
            alert(error.message)
        }
        if (user.roleId === Number(1)) {
            navigate('/admin')
            alert("Logged in as Admin!")
        } else {
            navigate('/')
            alert("Logged in successfully!")
        }
    }
    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-100">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Log In!</h1>
                    </div>

                    <form action="" method="post" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="font-bold">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    {...register('email')}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email..."
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-bold">Password</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('password')}
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
                                Logn in
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
export default SignIn