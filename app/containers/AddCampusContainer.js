import React, { Component } from 'react';
import AddCampus from '../components/AddCampus';
import { addNewCampus } from '../action-creators/campuses';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log("STSTSTS", state)
  return {
    campuses: state.listCampusReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    newCampus: (campus) =>  {
      dispatch(addNewCampus(campus));
    }
  };
};

class AddCampusContainer extends Component {

  constructor(props) {
    super(props);
    console.log('container props', props);
    this.state = {
      name: '',
      img: '',
      content: '',
      dirty: false
    };

    this.setNameValue = this.setNameValue.bind(this);
    this.setImgValue = this.setImgValue.bind(this);
    this.setContentValue = this.setContentValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setNameValue (e) {
    const name = e.target.value;
    this.setState({ name: name }); // test it also with name
  }

  setImgValue (e) {
    const img = e.target.value;    // Works with img url
    this.setState({ img: img }); // test it also with name
  }


  setContentValue (e) {
    const content = e.target.value;
    this.setState({ content: content }); // test it also with name
  }

  handleSubmit (e) {
    e.preventDefault();
    const name = this.state.name;
    const img = this.state.img;
    const content = this.state.content;
    const campus = { name, img, content}
    console.log("AddCampusContainer NEW CAMPUS", campus)
    this.props.newCampus(campus);
  }

  render () {
    const dirty = this.state.dirty;
    const name = this.state.name;
    const img = this.state.img;
    const content = this.state.content;
    let warning = '';

    return (
      <AddCampus
        setNameValue={this.setNameValue}
        name = {name}
        setImgValue={this.setImgValue}
        img = { img }
        setContentValue={this.setContentValue}
        content = { content }
        handleSubmit={this.handleSubmit}
        warning={warning}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCampusContainer);
