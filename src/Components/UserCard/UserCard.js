import React from "react";
import {Card, CardName,CardPhoto,Button} from "./UserCard.styled"
import { useState } from "react";

export const UserCard = (props) => { 
    const {user} = props;
    const [expanded, setExpanded] = useState(false);

    const DetailsClick = () => {
        setExpanded(!expanded);
      };
   
    return(

    <Card>
     
       <CardPhoto>
        <div>
       <img src={user.picture.large} alt="User Avatar" />
       </div>
       </CardPhoto>
       
        <CardName>
          <div>
         <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2>
         <p>Number: {user.cell}</p> 
         <p>Email: {user.email}</p>

         <Button onClick={DetailsClick}>Details</Button>
         {expanded &&(
        <>
        
        <p>Street: {user.location.street.name}, {user.location.street.number}</p>
        <p>City: {user.location.city}</p>
        <p>State: {user.location.state}</p>
        <p>Country: {user.location.country}</p>
        <p>PostCode: {user.location.postcode}</p>
        <p>latitude: {user.location.coordinates.latitude}</p>
        <p>longitude: {user.location.coordinates.longitude}</p>

        </>
         
         )}
         </div> 

        </CardName>
     
    </Card>  
        
     

)
}; export default UserCard