import React from "react";
import "../style/About.css"
import video07 from "../assets/Image/video07.mp4"
import Slider from "react-slick";

import { useState } from "react";

const About = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const Data = [
        {
            id: 1,
            title: "Help Our Customer",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur"
        },
        {
            id: 2,
            title: "Exceptional Web Solutions",
            text: "At Take A Trip, our mission is to inspire and empower travelers to explore the world with confidence, curiosity, and respect",
            content: "We strive to provide comprehensive and reliable travel information, curated experiences, and expert guidance to help our community make informed decisions and create unforgettable memories."
        },
        {
            id: 3,
            title: "Provide Expert Advice:",
            text: " Our team of travel experts and enthusiasts is dedicated to providing personalized advice and assistance to help travelers make informed decisions and create memorable experiences.",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur"
        }
    ]

    const [data, setData] = useState(1)


    return (
        <>
            {/* front page */}
            <main>

                <div className="about_title my-auto">

                    <video src={video07} autoPlay playsInline loop muted id="myVideo" ></video>
                    <div className="content text-center ">

                        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>About</h2>


                    </div>

                </div>

            </main>
            {/* front page end*/}

            <section>
                <div className="container mt-5">
                    <hr />
                    <div className="row">
                        <div className="col-md-6 about_img">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg" alt="" />
                        </div>
                        <div className="col-md-6 ">
                            <div className="row gap-5">
                                <button className="btn btn-warning" onClick={() => setData(3)} > what we do </button>
                                <button className="btn btn-warning" onClick={() => setData(2)}>our mission </button>
                                <button className="btn btn-warning" onClick={() => setData(1)}>our goal </button>
                            </div>
                            {Data.filter(item => item.id === data).map(item => {
                                return (
                                    <div className="demo mt-5" id="demo" >
                                        <h1 className="mt-3"> {item.title} </h1>
                                        <p className="mt-3"> {item.text} </p>
                                        <p> {item.content} </p>
                                    </div>

                                )
                            })}

                        </div>
                    </div><hr />
                </div>
            </section>

            <section className="mt-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><span>Why</span> Choose Us ?</h1>
                            <p> We provide a user-friendly platform for booking flights, accommodations, tours, and other travel services, making the planning process seamless and hassle-free.

                            </p>
                            <p> We have a team of experienced travel experts who curate and create reliable content, ensuring that travelers receive accurate information and recommendations.</p>
                            <button className="btn"> Read More</button>
                        </div>
                        <div className="col-md-6">
                            <div className="slider-container">
                                <Slider {...settings}>

                                    <div class="col-lg-4">
                                        <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                                            className="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
                                        <h2 class="fw-normal">CEO ,Take A Trip</h2>
                                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                                    </div>
                                    <div class="col-lg-4">
                                        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707609600&semt=ais"
                                            className="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />                                        <h2 class="fw-normal">Maneger ,Take A Trip</h2>
                                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                                    </div>
                                    <div class="col-lg-4">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5bccf44aaadd343d1754394a/bbe713e5-078c-4997-999c-cf22ed7bbe90/successful+career+woman.png"
                                            className="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />                                        <h2 class="fw-normal">Senior xyz, Take A Trip </h2>
                                        <p>And lastly this, the third column of representative placeholder content.</p>
                                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div><hr />
                </div>
            </section>
        </>
    )
}

export default About;