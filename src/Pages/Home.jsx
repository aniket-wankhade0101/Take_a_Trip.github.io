import React, { useContext } from "react";
import videoBg from "../assets/Image/video.mp4";
import "../style/Home.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from "../assets/Image/destination-1.jpg"
import img2 from "../assets/Image/destination-2.jpg"
import img3 from "../assets/Image/destination-3.jpg"
import img4 from "../assets/Image/destination-4.jpg"
import img5 from "../assets/Image/destination-5.jpg"
import AlertDismissible from "../subPage/alertBox";
import SearchBar from "./SearchBar";
import Card from 'react-bootstrap/Card';
import reviewData from "../assets/Data/reviewData";
import cityData from "../assets/Data/cityData"
import TourCard from "../components/TourCard/TourCard";
import Slider from "react-slick";
import { useParams } from "react-router-dom";



// import reviewData from "../assets/Data/reviewData";

const Home = () => {



  // react slick for slider start
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  // react slick for slider end


  return (
    <>

      {/* front page */}
      <main>

        <div className="main_page my-auto">
          <video src={videoBg} autoPlay playsInline loop muted id="myVideo"></video>

          <div className="content_home text-center ">
            <p style={{ fontFamily: "'Lobster', sans-serif;", fontFamily: "'Merienda', cursive;" }}>Take <span style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>A</span> Trip</p>
            <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Seeing the World, Through the Eyes of My Lens</h2>
            {/* <button className="btn btn-primary">Book Now</button> */}
          </div>

        </div>

      </main>
      {/* front page end*/}
      <AlertDismissible />
      <SearchBar />
      {/* Choose Your Place start */}
      <main>
        <section className="text-center mt-5">
          <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Destination</h3>
          <h1>Choose Your Destination</h1>
        </section>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <Col xs={6} md={4} className="parent_card">
                <Image src={img1} className="img" rounded />
                <div className="card_content">
                  <h3 className="text-red" style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Tokyo</h3>
                  <h2 className="text-white">Japan</h2>

                </div>
              </Col>
            </div>

            <div className="col-sm-6">
              <Col xs={6} md={4} className="parent_card">
                <Image src={img2} className="img" rounded />
                <div className="card_content">
                  <h3 className="text-red" style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Bangkok</h3>
                  <h2 className="text-white">Thailand</h2>

                </div>
              </Col>
            </div>

            <div className="row ">
              <div className="col-sm-4 ">
                <Col xs={6} md={4} className="parent_card1">
                  <Image src={img3} className="img" rounded />
                  <div className="card_content1">
                    <h3 className="text-red" style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>kaula Lumpur</h3>
                    <h2 className="text-white">Malasia</h2>

                  </div>
                </Col>
              </div>
              <div className="col-sm-4">
                <Col xs={6} md={4} className="parent_card1">
                  <Image src={img4} className="img" rounded />
                  <div className="card_content1">
                    <h3 className="text-red" style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Kathmandu</h3>
                    <h2 className="text-white">Nepal</h2>

                  </div>
                </Col>
              </div>
              <div className="col-sm-4">
                <Col xs={6} md={4} className="parent_card1">
                  <Image src={img5} className="img" rounded />
                  <div className="card_content1">
                    <h3 className="text-red" style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Jakarta</h3>
                    <h2 className="text-white">Indonesia</h2>

                  </div>
                </Col>
              </div>
            </div>
          </div>
          <hr />
        </div>


      </main>

      {/* Choose Your Place end*/}

      {/* Most Popular Tours start */}
      <main>
        <section className="text-center mt-5">
          <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Featured Tours</h3>
          <h1>Most Popular Tours</h1>
        </section>

        <div className="mt-5 m-5">
          <div className="container">
            <div className="row">
              {
                cityData.filter((item) => item.id <= 3).map((item) => {
                  // console.log(item)
                  return (
                    <>
                      <TourCard key={item.id} item={item} />
                    </>
                  )
                })
              }

            </div>


<hr />
          </div>
        </div>
      </main>
      {/* Most Popular Tours end */}


      {/* review part start */}

      <main>

        <section className="text-center mt-5">
          <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Fans Love</h3>
          <h1>What Our Fans Saying About Us</h1>
        </section>

        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {
                reviewData.map((cval) => {
                  return (
                    <div key={cval.id} className="col-md-4 mt-5 p-5">
                      <Card style={{ width: '20 rem', height: "500px" }}>
                        <Card.Img variant="top" src={cval.cover} />
                        <Card.Body>
                          <Card.Title> {cval.name} </Card.Title>
                          <Card.Text>
                            {cval.text}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <big>Rating : {cval.rating}</big>
                          <small className="text-muted">{cval.date}</small>
                        </Card.Footer>
                      </Card>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
          <hr />
        </div>
      </main>

      {/* review part end */}


      {/* contact part */}
      <div className="container">
        <div className="contact_page  row mt-5" id="contactPage">

          <h2 className="text-center" style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Contact Us</h2>

          <div className="col-md-6">
            <div className="container text center">


              <h1 className="mt-5 "> Aniket Wankhade</h1>
              __

              <p>aniketWankhade</p>
              <p>@niketwankhade</p>
            </div>

          </div>

          <div className="col-md-6 mt-5">
            <div className="container">
              <Form>
                <Form.Group className="mb-3" controlId="formGroupFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="secondary" className="btn">Submit</Button>
              </Form>
              
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Home;