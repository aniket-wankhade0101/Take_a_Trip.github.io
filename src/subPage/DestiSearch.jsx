import { useContext } from "react"
import video04 from "../assets/Image/video4.mp4"
import TourCard from "../components/TourCard/TourCard"
import { Context } from "../components/context/context"
import SearchBar from "../Pages/SearchBar"

const DestiSearch = () => {
    const { cityId } = useContext(Context)
    console.log(cityId)
    return (
        <>
            {/* front page */}
            <main>

                <div className="desti_title my-auto">

                <video src={video04} autoPlay playsInline loop muted id="myVideo"></video>
                    <div className="content text-center ">

                        <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Tours</h2>

                    </div>

                </div>

            </main>
            <SearchBar/>
            <section className="text-center mt-5">
                <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#FCC604" }}>Destination</h3>
                <h1>Choose Your Place</h1>
                
            </section>

            {/* front page end*/}
            <div className="container ">
                <div className="row">

                    {cityId ?
                        cityId.map((item => {
                            return (
                                <>

                                    <TourCard item={item} />

                                </>
                            )
                        }))
                        :
                        <div className="mt-5">
                            <div className="container mt-5 d-flex align-items-center justify-content-center" style={{ height: "25rem" }}>
                                <h1 className="">Error : 404 Page Not Found</h1>
                            </div>
                        </div>
                    }

                </div>
            </div>


        </>
    )
}
export default DestiSearch