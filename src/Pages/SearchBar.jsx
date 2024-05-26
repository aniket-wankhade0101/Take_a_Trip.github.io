import React, { useContext, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import destinationData from "../assets/Data/destinationData"
import cityData from "../assets/Data/cityData";
import { Context } from "../components/context/context";
import { NavLink } from "react-router-dom";




const SearchBar = () => {
    const {destination,cities,dest,setDest,city,setCity,setCityId,destinationChange,cityChange} = useContext(Context)
    // console.log(dest)
    // console.log(city)
    const changeDest = (e)=>{
        destinationChange(e)
        // setDest(e.target.value)
        // const arr = cities.filter(item=>item.key===e.target.value)
        // console.log(arr)
        // setCityId(arr)
        // searchDestination(dest)
    }
    const changeCity = (e)=>{
        cityChange(e)
        
    }
   
    
    return (

        <>
            <main>
                <div className="container mt-5" >
                    <div className="row d-flex justify-content-center ">
                        <Form.Group className="mb-3 col-md-2" controlId="formDestination">

                            <Form.Label >Destination</Form.Label>
                            <Form.Select value={dest} onChange={changeDest} aria-label="Default select example">
                                <option>Choose the destination</option>
                                {
                                    destination.map(items => {
                                        return (
                                            <>
                                                <option className="my-5" key={items.id} value={items.title}>{items.title}</option>
                                            </>
                                        )
                                    })
                                }


                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-2" controlId="formLocation">

                            <Form.Label >Location</Form.Label>
                            <Form.Select value={city} onChange={ changeCity} aria-label="Default select example">
                                <option>Open this select menu</option>
                                {
                                    cities.filter(item => item.key === dest).map(items => {
                                        return (
                                            <>
                                                <option key={items.id} value={items.title}>{items.title}</option>
                                            </>
                                        )
                                    })
                                }


                            </Form.Select>
                        </Form.Group>

                        


                        <NavLink className="btn btn-primary mt-4 pt-2 " to="/tours">Search</NavLink>
                    </div>
                </div>
            </main>

        </>
    );
}


export default SearchBar;   