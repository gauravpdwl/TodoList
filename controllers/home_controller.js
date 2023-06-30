const Todo=require('../models/todo');

const list=[
    {
        description:'To make todo list web app',
        date:'30 June 2023',
        category:'personal'
    },
    {
        description:'To complete small module',
        date:'1 July 2023',
        category:'work'
    }
];

module.exports.home=function(req, res){
    //return res.send("<h3>From 'home' controller</h3>");
    Todo.find({})
    .catch((err)=>{
        console.log('Error in fetching contacts from db');
        return;
    })
    .then((todos)=>{
        return res.render('home', {todo_list:todos});
    });

    //return res.render('home', {todo_list:list});
};

module.exports.addtodo=function(req, res){

    // const date = new Date(req.body.date);
    // let formattedDate = date.toLocaleDateString('en-GB');

    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    })
    .catch((err)=>{
        console.log(err);
        console.log("Error in creating contact");
        return;
    })
    .then(()=>{
        return res.redirect('back');
    });

    // console.log(req.body);
    // list.push({
    //     description:req.body.description,
    //     date:req.body.date,
    //     category:req.body.category
    // });

    // return res.render('home',{todo_list:list} );
};

module.exports.deletetodo=function(req, res){
    
    let id = req.query.id;

    Todo.findByIdAndDelete(id)
    .catch(()=>{
        console.log("Error in deleting todo");
        return;
    });

    return res.redirect('back');
    
    // console.log(req.query.id);
    // return res.render('home', {todo_list:list});
};