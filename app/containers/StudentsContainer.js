import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Students from '../components/Students';

const mapStateToProps = (state, ownProps) =>{

  console.log("Students container state", state);
  console.log("Students container ownProps", ownProps);

  return {
    students: state.students.listStudentReducer
  }
}

// const mapDispatchToProps = (dispatch, ownProps) =>{
//   return {}
// }


// We could pass only this
// export default connect(mapStateToProps)(Albums)
// but if we were using only mapDispatchToProps without mapStateToProps, we will have to pass the connect function (below), like this

// export default connect(null, mapDispatchToProps)(Albums);

// export default connect(mapStateToProps, mapDispatchToProps)(Students);
export default connect(mapStateToProps)(Students);










// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

// export default AlbumsContainer;

