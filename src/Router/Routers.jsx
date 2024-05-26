import React, { useState } from "react";
import {Routes , Route ,Navigate} from 'react-router-dom'

import Home from "../Pages/Home";
import Login from "../Pages/Login";

import Register from "../Pages/Register";
import Destination from "../Pages/Destination";
import Tours from "../Pages/Tours";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Booking from "../Pages/Booking";
import SearchResult from "../subPage/SearchResult";
import cityData from "../assets/Data/cityData";
import BookNowForm from "../subPage/Form";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DestiSearch from "../subPage/DestiSearch";
import EditForm from "../subPage/EditForm";




// const Routers =({val,setVal})=>{
    
const Routers =()=>{
//     const [id,setId] = useState(null)
//     const [dest,setDest] = useState("")
//     const [city,setCity] = useState("")
//     const arr = cityData.filter(item=>item.key===dest)
//     const arr2 = cityData.filter(item=>item.title===city)
//    const filterData = cityData.filter(item=>item.id === id)
//     console.log(filterData)      
//     const data = filterData[0]
//     console.log(data)
    // const myBookingData = {
    //     User:user,
    //     Total:total
    // }
    // console.log(myBookingData)
    return(
        <>
        <Routes>
            {/* <Route path='/' element={<Navigate to='/home' />} /> */}
            <>
            {/* <Route path='/' element={<Login val={val} setVal={setVal}/>} />
            <Route path='/register' element={<Register val={val} setVal={setVal}/>} /> */}

            <Route path='/' element={<Login/ >} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/destination' element={<Destination/>} />
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/:id' element={<SearchResult/>}/>
            <Route path='/form/:id' element={<BookNowForm/>}/>
            <Route path='/editform/:id' element={<EditForm/>}/>

            <Route path='/search' element={<DestiSearch/>}/>
             <Route path='/gallery' element={<Gallery/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/booking' element={<Booking />} />
            {/* <Route path='/search/:id' element={<SearchResult data={data} />} />
            <Route path='/form' element={<BookNowForm data={data} />} /> */}


           
            </>
            

        </Routes>
        </>
    )
}

export default Routers;