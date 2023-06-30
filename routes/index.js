const express=require('express');
const router=express.Router();
router.use(express.urlencoded());

//console.log('router loaded');
const homeController=require('../controllers/home_controller');

router.get('/', homeController.home);

// router.get('/',function(req, res){
//     res.send("<h3>From routes folder '/'</h3>")
// });

router.get('/deletetodo', homeController.deletetodo);

router.post('/addtodo', homeController.addtodo);



module.exports=router;