import React, { useContext } from "react";
import { Card } from "react-bootstrap"
import "./TourCard.css"
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";
const TourCard = ({ item }) => {
  const {showCityById} = useContext(Context)
  const navigate = useNavigate()
  const gotoDetail = (id)=>{
    showCityById(id)
    navigate(`/tours/${id}`)
  }
  return (
    <>
      <div className="col-md-4" onClick={()=>gotoDetail(item.id)}>

        <Card className="tour_card">
          <Card.Img variant="top" src={item.cover} height={500} className="tourCard_img" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.text}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted "> Price : ₹ {item.price}</small>
          </Card.Footer>
        </Card>
      </div>
    </>
  )
}
export default TourCard