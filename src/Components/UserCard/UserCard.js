import React from "react";
import {Card, CardName,CardPhoto} from "./UserCard.styled"

export const UserCard = (props) => { 
    const {user} = props;
    return(

    <Card>
     
       <CardPhoto>
        <div>
       <img src={user.picture.large} alt="User Avatar" />
       </div>
       </CardPhoto>
       
        <CardName>
          <div>
         <h2>Name: {user.name.first} {user.name.last}</h2> 
         <p>Number:{user.cell}</p> 
         <p>Email:{user.email}</p>
         </div> 
        </CardName>
       
      

    </Card>  
        


)
}; export default UserCard