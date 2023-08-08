import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getAllProducts, updateProduct, addProduct, deleteProduct } from "./Api/products";
import { getAllCategorys, updateCategory, addCategory, deleteCategory } from "./Api/categories";
import { getAllUsers, updateUser, addUser, deleteUser } from "./Api/users";
import { IProduct } from "./Types/products";
import { IUser } from "./Types/users";
import { ICategories } from "./Types/categories";
import LayoutWebsite from "./Layout/Client";
import LayoutAdmin from "./Layout/Admin";
import HomePage from "./Pages/Clients/Homepage";
import AdminPageProduct from "./Pages/Admin/Products/Dashboard";
import AddProductAdmin from "./Pages/Admin/Products/Add";
import UpdateProducts from "./Pages/Admin/Products/Update";
import ProductsPage from "./Pages/Clients/ProductPage";
import AdminPageCategories from "./Pages/Admin/Categories/Dashboard";
import AdminPageUser from "./Pages/Admin/User/Dashboard";
import AddCategories from "./Pages/Admin/Categories/Add";
import UpdateCategories from "./Pages/Admin/Categories/Update";
import UpdateUser from "./Pages/Admin/User/Update";
import AddUser from "./Pages/Admin/User/Add";
import SignIn from "./Pages/Clients/login";
import SignUp from "./Pages/Clients/Signup";
import { signup, signin } from "./Api/auth";
import { Home } from "./Layout/home";
import DetailPage from "./Pages/Clients/ProductPage";
import { getAllRoles } from "./Api/roles";
const App = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  //Roles
  useEffect(() => {
    getAllRoles().then(({ data }) => setRoles(data))
  }, [])
  //Users
  useEffect(() => {
    getAllUsers().then(({ data }) => setUsers(data))
  }, [])
  const onhandleUpdateUser = (user: IUser) => {
    updateUser(user)
  }
  const onhandleAddUser = (user: IUser) => {
    addUser(user)
  }
  const onhandleDeleteUser = (id: number) => {
    deleteUser(id)
    alert("Xóa tài khoản thành công!")
  }

  //Categories
  useEffect(() => {
    getAllCategorys().then(({ data }) => setCategory(data))
  }, [])
  const onhandleUpdateCategory = (product: ICategories) => {
    updateCategory(product)
  }
  const onhandleAddCategory = (product: ICategories) => {
    addCategory(product)
  }
  const onhandleDeleteCategory = (id: number) => {
    deleteCategory(id)
    alert("Xóa danh mục sản phẩm thành công!")
  }

  //Products
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
  }, [])
  const onhandleUpdateProduct = (product: IProduct) => {
    updateProduct(product)
  }
  const onhandleAddProduct = (product: IProduct) => {
    addProduct(product)
  }
  const onhandleDeleteProduct = (id: number) => {
    deleteProduct(id)
    alert("Xóa sản phẩm thành công!")
  }
  //Auth
  const onhandleSignUp = (data: IUser) => {
    signup(data)
  }
  const onhandleSignIn = (data: IUser) => {
    signin(data)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp onAdd={onhandleSignUp} users={users} />} />
        <Route path='/signin' element={<SignIn users={users} />} />
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage products={products} />} />
          <Route path="/categories/:id" element={<Home products={products} categories={category} />} />
          <Route path="/detail/:id" element={<DetailPage products={products} />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPageProduct products={products} onDelete={onhandleDeleteProduct} />} />
          <Route path="product/add" element={<AddProductAdmin onAdd={onhandleAddProduct} categories={category} />}></Route>
          <Route path="categories/list" element={<AdminPageCategories categories={category} onDelete={onhandleDeleteCategory} />} />
          <Route path="/admin/categories/list/list/add" element={<AddCategories onAdd={onhandleAddCategory} />}></Route>
          <Route path="/admin/user/list/list/add" element={<AddUser onAdd={onhandleAddUser} roles={roles} />}></Route>
          <Route path="user/list" element={<AdminPageUser users={users} onDelete={onhandleDeleteUser} />} />
          <Route path="product/update/:id" element={<UpdateProducts onEdit={onhandleUpdateProduct} products={products} categories={category} />} />
          <Route path="/admin/categories/list/categoty/update/:id" element={<UpdateCategories onEdit={onhandleUpdateCategory} categories={category} />} />
          <Route path="/admin/user/list/user/update/:id" element={<UpdateUser onEdit={onhandleUpdateUser} users={users} roles={roles} />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
export default App