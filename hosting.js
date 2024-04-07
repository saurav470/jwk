const express = require('express');
const path = require('path');

const app = express();


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res)=>{
    res.send('Hello World');
});







app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})