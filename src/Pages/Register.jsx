import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/Register.css"
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../components/context/context";


const Register = () => {
    const {status,setStatus} = useContext(Context)
    setStatus(true);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const navigate = useNavigate()
    const inputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user
        if(!name || !email || !password || !cpassword) return alert("please fill all the fields");
        if(password !== cpassword) return alert("Invalid email or password");
        
        localStorage.setItem("userStorage", JSON.stringify(user))
        alert(`${name},${email},${password} registed successfully!`)
        setStatus(false)
        navigate("/home")
    }
    // const Register = () => {
    return (
        <>
            <section className="register_page d-flex align-items-center">
                <div className="container">
                    <div className="row ">
                        <Form onSubmit={submitHandler} className="col-md-6">
                            {/* <Form className="col-md-6"> */}
                            <Form.Group className=" mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" name="name" value={user.name} onChange={inputHandler} />
                                {/* <Form.Control type="text" placeholder="Your Name" name="name" /> */}
                            </Form.Group>


                            <Form.Group className=" mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Your Email" name="email" value={user.email} onChange={inputHandler} />
                                {/* <Form.Control type="text" placeholder="Your Email" name="email"  /> */}
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className=" mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={inputHandler} />
                                {/* <Form.Control type="password" placeholder="Password" name="password" /> */}
                            </Form.Group>

                            <Form.Group className=" mb-3" controlId="formBasicPassword">
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="Repeat your Password" name="cpassword" value={user.cpassword} onChange={inputHandler} />
                                {/* <Form.Control type="password" placeholder="Repeat your Password" name="cpassword" /> */}
                            </Form.Group>

                            {/* <Form.Group className=" mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <div className="text-white">User already registered?<NavLink to="/" className="text-white">Login</NavLink></div>
                        </Form>
                        {/* <div className="col-md-4">
                            hi
                        </div> */}
                    </div>

                </div>
            </section>
        </>
    )
}
export default Register;