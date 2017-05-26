import React, { Component }  from 'react';
import { Link } from 'react-router';
import { deleteStudentById, updatelist } from '../action-creators/students';
import { render } from 'react-dom';
// import axios from 'axios';


const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudentById (studentId) {
      dispatch(deleteStudent(studentId));
    }
  };
};

// export default function Students (props) {
export default class Students extends Component {
  constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);


	}



  handleDelete(e, id) {

    e.preventDefault();

    this.props.deleteStudentById(id);


	}

render(){

  const students = this.props.students;

  return (
  <div>
      <h3>Students</h3>
      <div className="row">
        {
          students && students.map(student => (
            <div className="col-xs-3" key={ student.id }>
              <Link className="thumbnail" to={`/students/${student.id}`}>

                <div className="caption">
                  <h5>
                    <span>{ student.name }</span>
                  </h5>
                </div>

                 <span> { student.email }</span>
                 </Link>


                 <button type="button" className="btn btn-danger" key={student.id} onClick={(e)=> this.handleDelete(e, student.id)}>Delete</button>

            </div>
          ))
        }
      </div>
    </div>
  )
}
}


//  <img src={ studentimg }/>
//  <small>{ studentcontent }</small>
