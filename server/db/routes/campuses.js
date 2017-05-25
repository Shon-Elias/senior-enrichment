const express = require('express');
const routes = new express.Router();
const Campus = require('../models').Campus;


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

//delete
routes.post('/')





module.exports = routes;
