import { createContext, useState } from "react";
import cityData from "../../assets/Data/cityData";
import destinationData from "../../assets/Data/destinationData";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [status,setStatus] = useState(false)   // for login
    const [destination, setDestination] = useState(destinationData);
    const [cities, setCities] = useState(cityData);
    const [cityId, setCityId] = useState(null);
    const [dest, setDest] = useState("");
    const [city, setCity] = useState("");
    //cart 
    const [cartItem, setCartItem] = useState([])

    // const arr = cities.filter(item=>item.key===dest)
    const destinationCities = () => {
        const arr2 = cities.filter(item => item.key === destination.title)
        console.log(arr2)
        setCityId(arr2)
        console.log(cityId)
    }
    const destinationTitle = (title) => {
        const arr2 = cities.filter(item => item.key === title)
        setCityId(arr2)
        console.log(cityId)
    }
    const showCityById = (id)=>{
        const arr = cities.filter((item)=>item.id === id)
        setCityId(arr)
    }
    const destinationChange =(e)=>{
        setDest(e.target.value)
        const arr = cities.filter(item=>item.key===e.target.value)
        console.log(arr)
        setCityId(arr)
    }
    const cityChange = (e)=>{
        setCity(e.target.value)
        const arr = cities.filter(item=>item.title===e.target.value)
        console.log(arr[0])
        setCityId([arr[0]])
    }
    
    // const searchDestination = (dest)=>{
    //     console.log(dest)
    //     const arr = cities.filter(item=>item.key===dest)
    //     console.log(arr)
    //     setCityId(arr)
    // }

    //user data get



    const [id, setId] = useState(null)

    //     
    //     
    //     const arr = cityData.filter(item=>item.key===dest)
    //     const arr2 = cityData.filter(item=>item.title===city)
    //    const data = cityData.filter(item=>item.id === id)    

    //Add to card

    const [listItem, setListItem] = useState([]);

    const handleAddToCard = (user, add) => {

        const obj = { ...user, ...add }    // spread two obj in one obj
        console.log(obj)
        let items = [...cartItem]

        items = [...items, obj]

        console.log(items)
        setCartItem(items)
    }

    return (
        <Context.Provider value={{
            destination,
            destinationCities,
            cityId,
            cities,
            dest,
            setDest,
            city,
            setCity,
            setCityId,

            handleAddToCard,
            cartItem,setCartItem,
            status,setStatus,
            destinationTitle,
            destinationChange,
            cityChange,
            showCityById
        }}>{children}</Context.Provider>
    )
}
export default AppContext;

