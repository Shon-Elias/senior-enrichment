'use strict'
const api = require('express').Router()
const db = require('./db/index.js')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
//routes
const campusRouter = require('./db/routes/campuses');
const studentRouter = require('./db/routes/students');

 api.use('/campuses', campusRouter);
 api.use('/students', studentRouter);
// api.use('/campuses',require('../'))


api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api;
