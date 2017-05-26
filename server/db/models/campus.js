var Sequelize = require('sequelize');
var db = require('../index.js');
// const db = new Sequelize('postgres://localhost:5432/academy');
const Student = require('./student');

 const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING
    // allowNull: false,

    // validate: {
    //   notEmpty: true
    // }
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true
  },

  content: {
    type: Sequelize.STRING,
    allowNull: true
  }
//  },
//  {
//     hooks: {

// 		// beforeDestroy: function(campus) {
// 		// 	Student.findAll({where: { campusId: campus.Id }})
// 		// 	.then (students => students.destroy({returning: true}))
// 		// 	.then (() => console.log('Users removed from Database'))
// 		// 	.catch(err => console.error(err));

// 		// }

// 	}

});


module.exports = Campus;


