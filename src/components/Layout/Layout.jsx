import React, { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Router/Routers";
const Layout = () => {
    // const [val,setVal] = useState(false)
    return (
        <>
            {/* <Header val={val} setVal={setVal}/>
        <Routers val={val} setVal={setVal}/>
        <Footer/> */}

            <Header />
            <Routers />
            <Footer />
        </>
    )
}
export default Layout;