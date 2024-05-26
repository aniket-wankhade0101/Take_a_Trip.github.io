import React, { useContext, useState } from "react";
import video3 from "../assets/Image/video05.mp4"
import Card from 'react-bootstrap/Card';
import SearchBar from "./SearchBar";
import cityData from "../assets/Data/cityData"
import destinationData from "../assets/Data/destinationData";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/context/context";


const Tours = () => {
    // const [dest,setDest] = useState("")
    // const [city,setCity] = useState("")
    // const arr = cityData.filter(item=>item.key===dest)
    // const arr2 = cityData.filter(item=>item.title===city)
    const {  cityId ,cities} = useContext(Context)
    console.log(cityId)
    const navigate = useNavigate()

    const navPage = (val) => {
        // setId(val.id)
        // navigate("/search")
    }
    const gotoDetailPage = (id)=>{
        navigate(`/tours/${id}`)
    }

    return (
        <>
            {/* front page */}
            <main>

                <div className="desti_title my-auto">
                    <video src={video3} autoPlay playsInline loop muted id="myVideo" ></video>

                    <div className="content text-center ">

                        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Tours</h2>
                       

                    </div>

                </div>

            </main>


            {/* front page end*/}

            {/* searchbar  */}
            <SearchBar />

            <section>

                <div className="text-center mt-5">
                    <h3>Featured Tours</h3>
                    <h1>Most Popular Tours</h1>
                </div>

                <div className="container">
                    <div className="row">
                        {
                            cityId?(cityId).map((cval) => {
                                return (
                                    <>
                                        <div key={cval.id} className="col-md-4 m-auto p-5" onClick={()=>gotoDetailPage(cval.id)}>

                                            <Card onClick={() => navPage(cval)}>
                                                <Card.Img variant="top" src={cval.cover} height={300} />
                                                <Card.Body>
                                                    <Card.Title>{cval.title}</Card.Title>
                                                    <Card.Text>
                                                        {cval.text}
                                                    </Card.Text>

                                                </Card.Body>
                                                <Card.Footer>
                                                    <big className="text-muted"> Price : {cval.price}</big>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    </>
                                    
                                )
                            }):
                            (cities).map((cval) => {
                                return (
                                    <>
                                        <div key={cval.id} className="col-md-4 m-auto p-5" onClick={()=>gotoDetailPage(cval.id)}>

                                            <Card onClick={() => navPage(cval)}>
                                                <Card.Img variant="top" src={cval.cover} height={300} />
                                                <Card.Body>
                                                    <Card.Title>{cval.title}</Card.Title>
                                                    <Card.Text>
                                                        {cval.text}
                                                    </Card.Text>

                                                </Card.Body>
                                                <Card.Footer>
                                                    <big className="text-muted"> Price : {cval.price}</big>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>
            </section>

        </>
    )
}

export default Tours;