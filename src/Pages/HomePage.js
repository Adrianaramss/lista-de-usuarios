import React from "react";
import Header from "../Components/header/Header";
import { Card } from "../Components/UserCard/UserCard.styled";
import { useState,useEffect } from "react";
import axios from "axios";
import UserCard from "../Components/UserCard/UserCard";
export const HomePage = () => {


    const [userList, setUserList] = useState([]); // variavel para armazenar dados api
    
    useEffect(() => {
      getUsers()
    }, [])
    
    const getUsers = async () => {
      try {
    
        const response = await axios.get("https://randomuser.me/api/?results=5")
    
        setUserList(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(userList)

   

    return(
    <>
   <Header/>
   {userList.map((user, index) => (
        <UserCard key={user.id?.value || index} user={user} />
      ))}
    </>
  );
};

export default HomePage;