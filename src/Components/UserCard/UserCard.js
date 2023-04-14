import React from "react";
import { Card, CardName, CardPhoto, Button, Photo } from "./UserCard.styled"
import { useState } from "react";
import logouser from "../../assets/lista.png"
export const UserCard = (props) => {

  const { user } = props;
  const [expanded, setExpanded] = useState(false);
  const [buttontext, setButtonText] = useState("Details")

  const DetailsClick = () => {
    setExpanded(!expanded);
  
  if (expanded) {setButtonText("Details");
  } else {
    setButtonText ("See Less"); 
  }
};

  return (


    <Card className={expanded}>

      <CardPhoto>
        <div>
          <img src={user.picture.large} alt="User Avatar" />
        </div>
      </CardPhoto>
      <Photo>
        <div>
          <img src={logouser} alt="logouser" width="20px"></img>
        </div>
      </Photo>
      <CardName>
        <div>
          <h1> {user.name.title} {user.name.first} {user.name.last}</h1>
          <p>Cell: {user.cell}</p> 
          <p>Email: {user.email}</p>
          <Button onClick={DetailsClick}>{buttontext}</Button>
          {expanded && (
            <div>
              <h2>Personal Information:</h2>
              <p>Phone: {user.phone}</p> 
              <p>Age: {user.dob.age}</p> 
              <p>Date of birth: {user.dob.date}</p> 
              <p>Gender: {user.gender}</p> 

              <br/>
              <h3>Location:</h3>
              <p>Street: {user.location.street.name}, {user.location.street.number}</p> 
              <p>City: {user.location.city}</p>
              <p>State: {user.location.state}</p>
              <p>Country: {user.location.country}</p>
              <p>PostCode: {user.location.postcode}</p>
              <p>Latitude: {user.location.coordinates.latitude}</p>
              <p>Longitude: {user.location.coordinates.longitude}</p>
            </div>

          )}
        </div>

      </CardName>

    </Card>



  )
}; export default UserCard