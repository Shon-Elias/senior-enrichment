const express = require('express');
const routes = new express.Router();
const blue = require('chalk').blue;

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

// UPDATE
routes.put('/:id', (req, res, next) => {
  return Student.update(req.id)
  .then(result => {
    res.send(result);
  })
  .catch(next);
})

// Create a new Student
routes.post('/', (req, res, next) => {
  console.log(blue("New student", req.body ,"saved to the Database at", new Date()))
	Student.create(req.body)
	.then(studentSavedOnDb => {
    //  console.log(blue("New student", studentSavedOnDb.name ,"saved to the Database at", new Date()))
    res.json(studentSavedOnDb);
    //  res.sendStatus(201);
  });
})

// Delete Student
routes.delete('/:id', (req, res, next ) => {
	Student.destroy({where: { id: req.params.id } })
  .then(()=>res.sendStatus(204))
	.catch(next)
})

// routes.post('/:campusName', function(req, res, next){
// 	Promise
// 		.all([
// 			Campus.findOne({where: {name: req.params.campusName}}),
// 			User.create({
// 				name: req.body.name,
// 				email: req.body.email
// 			})
// 		])
// 		.spread( (campus, newUser) =>  {
// 			newUser.setCampus(campus.id)
// 		})
// 		.catch(next);
// })



module.exports = routes;
