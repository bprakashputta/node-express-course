const express = require('express');
const app = express();

const mockUserData = [
    {
        name: 'Mark',
        age: '20'
    },
    {
        name: 'Jill',
        age: '21'
    }
]



app.listen(8080, function (){
    console.log("App is running on port 8080");
})