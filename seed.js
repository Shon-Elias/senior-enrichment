
// const db = require('./server/db');
const db = require('./server/db');
// const db = require('./server/db/models').db;

var Promise = require('bluebird');
// const blue = require('chalk').Blue;
const Campus = require('./server/db/models').Campus;
const Student = require('./server/db/models').Student;

const data = {
  campuses: [
    {name: 'LA campus', img:  'https://www.aada.edu/template/frontend/img/open-houses/la_h.jpg', content: 'I like to JS' },
    {name: 'SF campus', img:  'http://www.baynewsnow.com/wp-content/uploads/2016/04/SFState_PerngchihHuang_01.jpg', content: 'I like to JS and Seqxuelize'},
    {name: 'NYC campus', img:  'http://inhabitat.com/nyc/wp-content/blogs.dir/2/files/2013/03/Proposed-Cornell-NYC-Campus-SOM-Morphosis-6.jpg',content: 'I like to JS, Seqxuelize and react'}

  ],
  students: [
    {name: 'Peter', email: 'peter.griffin.the2nd@gmail.com', campusId: 2}, {name: 'Lois', email: 'lois.griffin.the2nd@gmail.com', campusId: 2}, {name: 'Meg', email: 'meg.griffin.the2nd@gmail.com', campusId: 1}
  ]
}


db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  const addingCampus = Promise.map(data.campuses, function (campus) {
    return Campus.create(campus);
  });

  return  addingCampus;

})
.then(function () {
  console.log('Finished inserting data');
  const addingStudent = Promise.map(data.students, function (student) {
    return Student.create(student);
  })
  return addingStudent;

})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close(); // creates but does not return a promise
  return null; // stops bluebird from complaining about un-returned promise
});
