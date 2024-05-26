import React from "react";
import "./footer.css"
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>

            <main className="footer mt-5">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">

                            <div className="col-sm-4 col-md-2 mb-3">
                                <h5>Quick links</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary">Destination</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary">Tour</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary">Gallery</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary">About</a></li>
                                </ul>
                            </div>

                            <div className="col-sm-4 col-md-2 mb-3">
                                <h5>Social</h5>
                                <ul className="nav flex-column ">
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"><FaTwitter /> twitter</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"><FaFacebook /> faceBook</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"><FaInstagramSquare />InstaGram</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"><FaYoutube /> youtude</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"></a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5>Contact us</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"><span><FaLocationArrow /></span> Pune ,Maharastra</a></li>

                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"> <span><FaMobileScreen /></span> 08208351223</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="footer p-0 text-body-secondary"><span><IoIosMail /></span> aniketwankhade019@gmail.com</a></li>

                                </ul>
                            </div>
                            <div className="col-sm-4 offset-md-1 mb-3">
                                <form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of what's new and exciting from us.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <label for="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-sm-row justify-content-center  border-top">
                            <p> Take A Trip &copy;2024 DESIGNED BY ANIKET WANKHADE </p>
                            {/* <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-body-emphasis" href="#"> <img src=""  alt="logo" />   </a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"> <img src="" alt="logo" />   </a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"> <img src="" alt="logo" />    </a></li>
                        </ul> */}
                        </div>
                    </footer>
                </div>

            </main>
        </>
    )
}
export default Footer;