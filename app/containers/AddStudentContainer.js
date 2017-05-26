import React, { Component } from 'react';
import AddStudent from '../components/AddStudent';
import { addNewStudent } from '../action-creators/students';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log("STSTSTS", state)
  return {
    students: state.listStudentReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    newStudent: (student) =>  {
      dispatch(addNewStudent(student));
    }
  };
};

class AddStudentContainer extends Component {

  constructor(props) {
    super(props);
    console.log('container props', props);
    this.state = {
      name: '',
      email: '',
      dirty: false
    };

    this.setNameValue = this.setNameValue.bind(this);

    this.setEmailValue = this.setEmailValue.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setNameValue (e) {
    const name = e.target.value;
    this.setState({ name: name }); // test it also with name
  }

  setImgValue (e) {
    const email = e.target.email;    // Works with img url
    this.setState({ email: email }); // test it also with name
  }


  handleSubmit (e) {
    e.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const student = { name, email }
    console.log("AddStudentContainer NEW STUDENT", student)
    this.props.newStudent(student);
  }

  render () {
    const dirty = this.state.dirty;
    const name = this.state.name;
    const email = this.state.email;
    let warning = '';

    return (
      <AddStudent
        setNameValue={this.setNameValue}
        name = {name}
        setEmailValue = {this.setEmailValue}
        email = { email }
        handleSubmit={this.handleSubmit}
        warning={warning}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddStudentContainer);
