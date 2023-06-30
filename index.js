const express=require('express');

const db=require('./config/mongoose'); 
const Todo=require('./models/todo');

const app=express();
const port=8000;

//Using middleware we are sending all the reqeuest calls to 'routes' folder which will handle these requests 
app.use('/', require('./routes/'));

app.set('view engine', 'ejs');
app.set('views', './views');
// urlencoded is not useful here because routes are not handle here now, add below line in the routes folder in the file where routes are handled
//app.use(express.urlencoded());
app.use(express.static('assets'));

// app.get('/',function(req, res){
//     res.send("<h1>ToDoList</h1>");
// });

app.listen(port, function(err){
    if(err){
        console.log(`error in launching server at port ${port}`);
        console.log(err);
    }
    console.log(`Server is successfully launched on port ${port}`);
});