const express = require('express')
const cors = require('cors')
const multer = require('multer')


const app = express()


// Middleware
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 5000


// Test Route
app.get('/', (req , res)=>{
  res.send('Hello')
})

app.listen(PORT , ()=>{
 console.log(`App is running at ${PORT}`)
})