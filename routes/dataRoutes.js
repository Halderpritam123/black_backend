const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


//check route
router.get('/check',(req,res)=>{
    res.status(200).send({"msg":"Welcome To Home Page"})
})
// Add data
router.post('/', dataController.addData);

// GET 
router.get('/', dataController.getFilteredData);


//Edit data
router.patch('/:id', dataController.editData);

//Delete data
router.delete('/:id', dataController.deleteData);

module.exports = router;
