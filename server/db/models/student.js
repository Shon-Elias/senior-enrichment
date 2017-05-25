'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');
// const db = new Sequelize('postgres://localhost:5432/academy');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,

    // validate: {
    //   notEmpty: true
    // }
  },

  email: {
    type: Sequelize.STRING,
    // unique: true,
    allowNull: false,

    validate: {
      isEmail: true
    }
  }
// },
// {
// 		hooks: {
//       beforeCreate: function(student){
//         student.img = './images/'+ student.name.toLowerCase() + '.jpg'
//       }
//     }
});

module.exports = Student;

