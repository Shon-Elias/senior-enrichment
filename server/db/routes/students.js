const express = require('express');
const routes = new express.Router();

const Student = require('../models').Student;


// All Students
routes.get('/', (req, res, next) => {

   Student.findAll()
  .then(students => {
    students ?    // do we have any student on our DB ?
    res.json(students) : // if so send it back
    res.sendStatus(404);   // if not send an 404
  })
  .catch(next);
})

// Single student
routes.get('/:id', (req, res, next) => {

  const id = !(req.params.id) ? res.sendStatus(500) : req.params.id;


   Student.findById(id)
  .then(student => {
    student ?             // do we have any student on our DB ?
    res.json(student) :   // if so send it back
    res.sendStatus(404);   // if not send an 404
  })
  .catch(next);

});


module.exports = routes;
