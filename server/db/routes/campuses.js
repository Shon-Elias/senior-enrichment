const express = require('express');
const routes = express.Router();
const Campus = require('../models').Campus;
const Student = require('../models').Student;
const blue = require('chalk').blue;

routes.get('/', (req, res, next) => {

  Campus.findAll()
  .then(campuses => {
    campuses ?
    res.json(campuses) :
    res.sendStatue(404);
  })
  .catch(next);

});

routes.get('/:id', (req, res, next) =>  {

  const id = !(req.params.id) ? res.sendStatus(500) : req.params.id;


  Campus.findById(id)
  .then(campus => {
    campus ?             // do we have any student on our DB ?
    res.json(campus) :   // if so send it back
    res.sendStatus(404);   // if not send an 404
  })
  .catch(next);

})


// UPDATE
routes.put('/:id', (req, res, next) => {
  return Campus.update(req.id)
  .then(result => {
    res.send(result);
  })
  .catch(next);
})

// Create a new Campus
routes.post('/', (req, res, next) => {
  console.log(blue("res", res, "req", req.body));
	Campus.create(req.body)
	.then(campusSavedOnDb => {
    // console.log(blue("New campus", campusSavedOnDb.name ,"saved to the Database at", new Date()));
    // res.sendStatus(201);
    res.json(campusSavedOnDb);
  })
})

//delete
// Delete Campus
routes.delete('/:id', (req, res, next ) => {
	Campus.destroy({where: { id: req.params.id } })
  .then(()=>res.sendStatus(204))
	.catch(next)
})


// Students from specific campus
// Axios path will be api/campuses/students/:id
routes.get('/students/:id', (req, res, next ) => {
	return Student.findAll({
		where: {campusId: req.params.id}
	})
	.then(students => res.send(students))
	.catch(next)
})



module.exports = routes;
