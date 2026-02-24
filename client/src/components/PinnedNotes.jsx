import React from 'react'
import NoteCard from './NoteCard';
import { TiPlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const PinnedNotes = () => {
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
   ];
  return (
    <div className="">
      <div className="bg-black w-full text-white text-center px-4 relative ">
        <h1 className="text-2xl font-semibold ">Sea all your notes</h1>
        <div className="p-2 grid grid-cols-2 gap-4 ">
          {notes?.map((note) => (
            <Link to={`/note/${note?.id}`}>
              {" "}
              <NoteCard note={note} />{" "}
            </Link>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default PinnedNotes