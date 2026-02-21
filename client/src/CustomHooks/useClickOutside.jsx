import React, { useEffect } from 'react'

const useClickOutside = (ref , callback) => {
 useEffect(() => {
   const handler = (event) => {
     if (!ref.current || ref.current.contains(event.target)) {
      return;
     }
     callback()
   };

   document.addEventListener("pointerdown", handler);

   return () => {
     document.removeEventListener("pointerdown", handler);
   };
 }, [ref , callback]);
}

export default useClickOutside