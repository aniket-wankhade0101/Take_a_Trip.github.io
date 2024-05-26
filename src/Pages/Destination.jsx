import React, { useContext } from "react";
import "../style/Destination.css"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import video02 from "../assets/Image/video02.mp4"
import { Context } from "../components/context/context";
import { useNavigate } from "react-router-dom";
// import destinationData from "../assets/Data/destinationData";


// import SearchResult from "../subPage/SearchResult";



const Destination = () => {
  const {destination,destinationTitle} = useContext(Context)
  const navigate = useNavigate()
  const gotoSearch = (title)=>{
    destinationTitle(title)
    navigate("/search")
  }

  // const gotoTour = (e)=>{
  //   destinationChange(e)
  //   navigate("/tours")
  // }
  return (
    <>

      {/* front page */}
      <main>

        <div className="desti_title my-auto">
          <video src={video02} autoPlay playsInline loop muted id="myVideo" ></video>

          <div className="content text-center ">

            <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Destination</h2>
           

          </div>

        </div>

      </main>
      {/* front page end*/}

      <section className="desti_subtitle d-flex align-items-center mt-5">
        <div className="container">
          <h2>Where2Go by MakeMyTrip - Discover Places & Plan Your Holidays!</h2>
          <p className="mt-5"> Planning your next vacation? Try one of these exotic and comfortable travel ideas to make your holiday memorable.
            Whether a romantic beach vacation, a relaxing family holiday, an adventurous trek or a heritage walk, plan the most appropriate itinerary within your budget.
          </p>
        </div>
      </section>




      <main>
        <section className="text-center mt-5">
          <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Destination</h3>
          <h1>Choose Your Place</h1>
        </section>


        <section>
          <div className="container mt-5">
            <div className="row">
              {
                destination.map((cval) => {
                  return (
                    <>
                      <div className="col-md-4" key={cval.id} onClick={()=>gotoSearch(cval.title)}>
                        <Card style={{ width: '24rem' , height:'38rem' }} className="mt-5" >
                          <Card.Img variant="top" src={cval.cover} height={300} />
                          <Card.Body>
                            <Card.Title>{cval.title}</Card.Title>
                            <Card.Text>
                            {cval.text}
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </section>

      </main>

      
    </>
  )
}

export default Destination;