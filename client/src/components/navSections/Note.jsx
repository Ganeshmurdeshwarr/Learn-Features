import React from 'react'
import { useParams } from 'react-router-dom'
import ganesh from '../../assets/Ganesh-Devadiga (1).png'

const Note = () => {

  const {id} = useParams()


 const note = [ {
      id: 0,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      img:ganesh,
      description:
        "im ganesh devadiga im ganesh devadiga im ganesh devadigaim ganesh devadigaim ganesh devadigaim ganesh devadigaim ganesh devadiga",
    },]


  return (
    <div className="border flex flex-col items-start p-2 rounded-2xl">
      <h1 className="text-xl ">{note[0].title}</h1>
      <p className="line-clamp-3">{note[0].description}</p>
      <img src={ganesh} alt="" />
      <p>12/2/2025</p>
    </div>
  );
}

export default Note