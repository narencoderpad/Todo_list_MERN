const express = require("express");
const router = express.Router();
const ListModel = require("../model/ListModel");

router.get('/getList', (req, res) => { 
    ListModel.find()
    .then(function(data){
        res.status(200).json({
            userList:data ? data :[]
        })     
    })
    .catch(function(error){
        res.status(500).json({
            success:"Not Added"
        });
    })
});

router.post('/addList', (req, res) => {
    const {name} = req.body;
    let List = {};
    List.name = name;
    let userModel = new ListModel(List) 
    userModel.save()
    .then(function(data){
        res.status(200).json({
            success:"List added Successfully"
        })     
     })
     .catch(function(error){
        res.status(500).json({
            success:"Not Added"
        });
     })
});
router.put('/editList', (req, res) => {
    const {name,id} = req.body;
    let List = {};
    List.name = name;
    ListModel.findOneAndUpdate({"_id":id},List)
    .then(function(data){
        res.status(200).json({
            success:"List edited Successfully"
        })     
     })
     .catch(function(error){
        res.status(500).json({
            success:"Not edited"
        });
     })
});
router.delete('/deleteList', (req, res) => {
    const {name,id} = req.body;
    ListModel.findOneAndDelete({"_id":id})
    .then(function(data){
        res.status(200).json({
            success:"List deleted Successfully"
        })     
     })
     .catch(function(error){
        res.status(500).json({
            success:"Not deleted"
        });
     })
});

module.exports = router;
