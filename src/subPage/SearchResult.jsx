import React, { useContext, useEffect } from "react";
import "./searchResult.css"
import video04 from "../assets/Image/video4.mp4"
import Card from 'react-bootstrap/Card';
import cityData from "../assets/Data/cityData";
import demo from "../assets/Image/gallery-01.jpg"
// import BookNowForm from "./Form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Context } from "../components/context/context";



const SearchResult = () => {

    const { id } = useParams()

    const { cities, setCityId, cityId } = useContext(Context)
    const navigate = useNavigate()


    const cityResult = cities.filter(item => item.id == id)
    const gotoForm = (id) => {
        console.log(id)
        navigate(`/form/${id}`)
    }
    return (
        <>
            <main>
                <section>

                    <div className="about_title my-auto">

                        <video src={video04} autoPlay playsInline loop muted id="myVideo"></video>
                        <div className="content text-center ">

                            <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Booking</h2>

                        </div>

                    </div>

                </section>

                <div className="search_result mt-5">
                    
                    (<div className="container">
                        <hr />
                        <div class="row featurette">
                            <div class="  col-md-7 d-flex flex-column justify-content-center">
                                <h2 class="featurette-heading fw-normal lh-1">{cityResult[0].title} <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                                <p class="lead">{cityResult[0].text}</p>
                                <h4> Price : ₹{cityResult[0].price}</h4>
                                <button className="btn btn-warning" onClick={() => gotoForm(id)}>Book Now</button>
                            </div>
                            <div class="col-md-5">

                                <img src={cityResult[0].cover} height={500} width={500} alt="" />
                            </div>
                        </div>
                        <hr />

                    </div>)
               

                </div>

            </main>



            {/* <BookNowForm/> */}


        </>
    )
}

export default SearchResult;