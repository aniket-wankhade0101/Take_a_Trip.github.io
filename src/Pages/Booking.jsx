import React, { useContext, useState } from "react";
import video3 from "../assets/Image/video03.mp4"
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "../components/context/context";
import { useNavigate } from "react-router-dom";



// const Booking = ({user,total,setTotal}) => {
//     console.log(user,total)

const Booking = () => {
    const { cartItem, setCartItem } = useContext(Context)
    console.log(cartItem)
    const navigate = useNavigate()

    const deleteHandle = (id) => {
        const newCart = cartItem.filter((item, inx) => inx !== id)
        setCartItem(newCart)
    }

    const handleEdit = (id) => {
        console.log(id)
        navigate(`/form/${id}`)
    }

    return (
        <>
            <main>
                <div className="desti_title my-auto">
                    <video src={video3} autoPlay playsInline loop muted id="myVideo" ></video>

                    <div className="content text-center ">

                        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>My Booking</h2>
                      
                    </div>
                </div>
            </main>

            <section>
                <div className="container mt-5">
                    {/* <ListGroup horizontal className="booking_list p-5 gap-5">
                        
                        <ListGroup.Item style={{border:"none"}}> <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" height={200} />  </ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}>Destination</ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}>Location</ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}>person</ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}>Amount in ₹ </ListGroup.Item>
                        <button className="btn">Edit</button>
                        <button className="btn">Cancel</button>
                    </ListGroup> */}

                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Destination</th>
                                <th>Location</th>
                                <th>Person</th>
                                <th>Price</th>
                                <th>Total Amount</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.length ?
                                    cartItem.map((item, inx) => {
                                        let no = inx + 1;
                                        return (
                                            <>
                                                <tr key={inx}>
                                                    <td>{no}</td>
                                                    <td className=" "><img src={item.img} width={100} height={100} alt="img" /></td>
                                                    <td>{item.destination}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.person}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.totalAmount}</td>
                                                    <td> <button onClick={() => handleEdit(no)} className="btn btn-primary">Edit</button> <button onClick={() => deleteHandle(inx)} className="btn btn-danger">delete</button></td>

                                                </tr>
                                            </>
                                        )
                                    }) :
                                    <div className="container text-center">
                                        <h3>NO Booking</h3>
                                    </div>

                            }



                        </tbody>
                    </Table>




                    <hr />
                </div>
            </section>
        </>
    )
}

export default Booking;