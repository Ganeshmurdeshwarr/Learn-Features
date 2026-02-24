import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ganesh from '../../assets/Ganesh-Devadiga (1).png'

const Note = () => {

  const {id} = useParams()

  const navigate = useNavigate()


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

      <div className="flex justify-around items-center gap-10 w-full mt-4">
        <button
          onClick={()=>navigate(`/edit/${id}`)}
          className="bg-blue-400/20 py-2 px-8 rounded-2xl "
        >
          Edit
        </button>
        <button className="bg-red-500 py-2 px-8 rounded-2xl ">Delete</button>
      </div>
    </div>
  );
}

export default Note