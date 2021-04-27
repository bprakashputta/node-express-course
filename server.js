const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

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

//Simple get method to get json response of user data
app.get('/users', function (request, response){
    console.log(request.params.id)
    response.json({
        success: true,
        message: 'successfully got users. Nice!!',
        users: mockUserData
    })
})

//Dynamic get route to pass variables from search bar
app.get('/users/:id', function (request, response){
    console.log(request.params.id)
    response.json({
        success: true,
        message: 'successfully got users. Nice!!',
        user: request.params.id
    })
})

//Writing a post request to implement simple login
app.post('/login', function (request, response){
    const username = request.body.username;
    const password = request.body.password;

    //mock username and passwords
    const mockusername = "billyTheKid";
    const mockpassword = "superSecret";

    //check login condition
    if(username === mockusername && password === mockpassword){
        response.json({
            success: true,
            message: "password and email match!",
            token: 'encrypted token goes here'
        })
    } else {
        response.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.get('/sum/:num1', function (request, response){
    console.log(request.params.num1);
    response.json({
        success: true,
        message: request.params.num1
    })
})

//The server is listening on the port 8000
app.listen(8000, function (){
    console.log("App is running on port 8000");
})