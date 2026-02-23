import React from 'react'
import { IoPencil } from "react-icons/io5";
import ganesh from '../assets/Ganesh-Devadiga (1).png'

const Profile = () => {
 
  const user = {
    id:1,
    name:'Ganesh',
    email:'ganesh@1.com',
    bio:'hi...hellow',
    image:ganesh
  }


  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="">
        <img src={user.image} alt="" className="rounded-full w-40 h-40" />

        <div className="flex items-center justify-center gap-4">
          <p className="text-center mt-4 ">Change Profile Pic </p>
          <IoPencil />{" "}
        </div>
      </div>
   <div className="flex self-start flex-col mt-10 gap-y-4">
    
        <h2>Name:{" "}{user.name}</h2>
        <h2>Email:{" "}{user.email}</h2>
        <h2>Bio:{" "}{user.bio}</h2>
        {/* <h2>Phone:{" "}{user.bio}</h2> */}
        
   </div>
    </div>
  );
}

export default Profile