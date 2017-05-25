import React from 'react';
import { Link } from 'react-router';

export default function Students (props) {

  console.log("Hi PATRICK Campuses componant props", props);

  const students = props.students;


  return (
  <div>
      <h3>Students</h3>
      <div className="row">
        {
          students && students.map(student=> (
            <div className="col-xs-6" key={ student.id }>
              <Link className="thumbnail" to={`/students/${student.id}`} >

                <div className="caption">
                  <h5>
                    <span>{ student.name }</span>
                  </h5>
                </div>
                 <span> { student.email }</span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}


//  <img src={ studentimg }/>
//  <small>{ studentcontent }</small>
