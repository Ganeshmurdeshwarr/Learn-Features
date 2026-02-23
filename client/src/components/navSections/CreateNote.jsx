import React from 'react'
import { useForm } from 'react-hook-form'

const CreateNote = () => {
  const {register , handleSubmit , formState:{errors}} = useForm()

const onSubmit = (data)=>{
  const formData = new FormData()

  Object.entries(data).forEach(([key, value])=>{

   if(key === "file"){
       formData.append( "image" ,  value[0])
    }else{
      formData.append(
        key ,value
      )
    }

  }  )

for (let [key, value] of formData.entries()) {
  console.log(key, value);
}
    
 
  
}
   


  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register("title", {
              required: "title is require",
              minLength: 3,
              maxLength: 20,
            })}
            placeholder="Enter your title"
            className="py-4 px-2 rounded border-0 mt-1"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
           rows={4}
            {...register("description", {
              required: "Description  is require",
              minLength: 5,
              maxLength: 20,
            })}
            placeholder="Enter your description"
            className="py-4 px-2 rounded border mt-1"
          />
        </div>

        {/* Due-date */}
        <div className="flex flex-col">
          <label htmlFor="date">Due-Date</label>
          <input
            id="date"
            type="datetime-local"
            {...register("date", {
              required: "date is require",
             
            })}
            placeholder="Enter your title"
            className="py-4 px-2 rounded border-0 mt-1"
          />
        </div>
        {/*  ImageFile */}
        <div className="flex flex-col">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept='image/*'
            {...register("file", {
              required: "file is require",
              max:1,
             
            })}
            
            className="py-4 px-2 rounded border-0 mt-1"
          />
        </div>

        <button type='submit' 
        className='bg-green-300 px-6 py-2 rounded-2xl mx-auto w-full'
        >Submit</button>
      </form>
    </div>
  );
}

export default CreateNote