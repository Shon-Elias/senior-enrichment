import React from 'react';
import { Link } from 'react-router';

export default function Student (props) {

  console.log("HOPEFULLY Student componant props", props);

  const student = props.selectedStudent;


  return (
  <div>
      <h3>Student Profile</h3>
      <div className="row">
        {
            student ? (
            <div className="col-xs-6" key={ student.id }>
              <Link className="thumbnail" to={`/students/${student.id}`} >

                <div className="caption">
                  <h5>
                    <span> { student.name } </span>
                  </h5>
                  <small>{ student.email }</small>
                </div>
              </Link>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}
