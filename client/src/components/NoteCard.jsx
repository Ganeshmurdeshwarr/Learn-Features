import React from 'react'

const NoteCard = ({note}) => {
 
  return (
    <div className="border flex flex-col items-start p-2 rounded-2xl">
      <h1 className="text-xl ">{note.title}</h1>
      <p className="line-clamp-3">{note.description}</p>
     
      <p>12/2/2025</p>
    </div>
  );
}

export default NoteCard