import React from 'react'
import NoteCard from '../components/NoteCard'
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";

const Home = () => {

  const notes = [
    {
      id: 0,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
     
      description:
        "im ganesh devadiga im ganesh devadiga im ganesh devadigaim ganesh devadigaim ganesh devadigaim ganesh devadigaim ganesh devadiga",
    },
    {
      id: 1,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 2,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 3,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 4,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
    {
      id: 5,
      title: "Home work",
      Due_date: 12 / 2 / 3030,
      description: "im ganesh devadiga",
    },
  ];

  return (
    <div className="bg-black w-full  text-white text-center px-4 relative pt-10 p">
      {/* Search */}
      <div className="text-2xl t-10 text-black bg-white  p-2 py-2 rounded-2xl">
        <input
          type="search"
          placeholder="Search note"
          className=" w-full  text-black border-0 outline-0"
        />
      </div>
      <h1 className="text-2xl font-semibold ">Sea all your notes</h1>

      <div className="bg-black my-10 flex w-full justify-between items-center">
        <div className="">
          <h1>Sort</h1>
          <select className="bg-black">
            <option value="due">Sort by Due-date</option>
            <option value="created">Sort by created-date</option>
            <option value="pinned">Sort by pinned</option>
          </select>
        </div>

        <div className=" m-2 p-2">
          <h1>Filter</h1>
          <div className="w-full  flex flex-col justify-center items-start ">
            <div className="">
              <label className="">
                <input type="checkbox" className="mr-2" />
                by date
              </label>
            </div>
            <div className="">
              <label className="">
                <input type="checkbox" className="mr-2" />
                pinned
              </label>
            </div>
            <div className="">
              <label className="">
                <input type="checkbox" className="mr-2" />
                important
              </label>
            </div>
            <div className="">
              <label className="">
                <input type="checkbox" className="mr-2" />
                due-date
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 grid grid-cols-2 gap-4 ">
        {notes.map((note, index) => (
          <Link key={index} to={`/note/${note.id}`}>
            {" "}
            <NoteCard note={note} />{" "}
          </Link>
        ))}
      </div>

      <div className="fixed  bottom-6 right-2  ">
        <Link to="/create-note">
          <TiPlus size={50} className=" text-yellow-500" />
        </Link>
      </div>
    </div>
  );
}

export default Home