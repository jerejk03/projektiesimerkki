const express = require('express');
const router = express.Router();
const course = require('../models/course_model');

router.get('/',function(request, response){
    course.getAll(function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result);
        }
    })
});

router.get('/:id',function(request, response){
    course.getById(request.params.id,function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result[0]);
        }
    })
});

router.post('/',function(request, response){
    course.add(request.body, function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result.affectedRows);
        }
    })
});

router.put('/:id',function(request, response){
    course.update(request.params.id, request.body, function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result.affectedRows);
        }
    })
});

router.delete('/:id',function(){
    course.delete(request.params.id, function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result.affectedRows);
        }
    })
});


module.exports=router;