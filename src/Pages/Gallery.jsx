import React from "react";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import gallery1 from "../assets/Image/gallery-01.jpg"
import gallery2 from "../assets/Image/gallery-02.jpg"
import gallery3 from "../assets/Image/gallery-03.jpg"
import gallery4 from "../assets/Image/gallery-04.jpg"
import gallery5 from "../assets/Image/gallery-05.jpg"
import gallery6 from "../assets/Image/gallery-06.jpg"
import gallery7 from "../assets/Image/gallery-07.jpg"
import video from "../assets/Image/video06.mp4"
import "../style/Gallery.css"


const Gallery = () => {
    return (

        <>
            <main>
                <section>

                    <div className="gallery_title my-auto">
                        <video src={video} autoPlay playsInline loop muted id="myVideo" ></video>

                        <div className="content text-center ">

                            <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Gallery</h2>
                         

                        </div>

                    </div>

                </section>
                <section className="text-center mt-5">
                    <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Gallery</h3>
                    <h1>People Create Memories</h1>
                </section>


                <div className="row mt-5">
                    <div className="column">
                        <img src={gallery1} />
                        <img src={gallery2} />
                        <img src={gallery3} />
                        <img src={gallery4} />
                        <img src={gallery6} />

                        <img src={gallery4} />
                    </div>
                    <div className="column">
                        <img src={gallery5} />
                        <img src={gallery7} />
                        <img src={gallery1} />
                        <img src={gallery4} />
                        <img src={gallery2} />

                    </div>
                    <div className="column">


                        <img src={gallery2} />
                        <img src={gallery3} />
                        <img src={gallery4} />
                        <img src={gallery6} />
                        <img src={gallery7} />

                    </div>
                    <div className="column">

                        <img src={gallery6} />
                        <img src={gallery1} />
                        <img src={gallery4} />
                        <img src={gallery2} />
                        <img src={gallery3} />
                    </div>
                </div>

            </main>

        </>
    )
}

export default Gallery;