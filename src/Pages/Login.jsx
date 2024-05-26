import React, { useContext, useState } from "react";
import "../style/Login.css"
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../components/context/context";


const Login = () => {
    const {status,setStatus} = useContext(Context)
    setStatus(true);
    const [user, setUser] = useState({

        email: "",
        password: "",

    })
    
    const navigate = useNavigate()
    const inputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = user
        const getdata = localStorage.getItem("userStorage")
        console.log(JSON.parse(getdata))
        const data = JSON.parse(getdata)
        if (data.email !== email || data.password !== password) {
            alert("Invalid Email or Password!")
        } else {
            alert(`user login successfully!`)
            setStatus(false)
            navigate("/home")
        }

    }

    // const Login = () => {
    return (
        <>
            <main className="login_page">
                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                        </div>

                        <div className="col-md-10 mx-auto col-lg-5">
                            <form onSubmit={submitHandler} className="login_layout  p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                {/* <form className="login_layout  p-4 p-md-5 border rounded-3 bg-body-tertiary"> */}

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={user.email} onChange={inputHandler} />
                                    {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"  /> */}

                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={user.password} onChange={inputHandler} />
                                    {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" /> */}

                                    <label for="floatingPassword">Password</label>
                                </div>
                                {/* <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div> */}
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                                <div className="text-white">Not a User?<NavLink to="/register" className="text-white">Register</NavLink></div>
                                <hr className="my-4" />
                                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                            </form>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}
export default Login;