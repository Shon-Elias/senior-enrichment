import React, { Component }  from 'react';
import { Link } from 'react-router';
import { deleteCampusById, updatelist } from '../action-creators/campuses';
import { render } from 'react-dom';



const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampusById (campusId) {
      dispatch(updatelist(campusId));
    }
  };
};

// export default function Campuses (props) {
export default class Campuses extends Component {
  constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);


	}

  handleDelete(e, id) {

    e.preventDefault();

    this.props.deleteCampusById(id);


	}

render(){

  const campuses = this.props.campuses;

  return (
  <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses && campuses.map(campus => (
            <div className="col-xs-6" key={ campus.id }>
              <Link className="thumbnail" to={`/campuses/${campus.id}`} >
                <img src={ campus.img }/>
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                  <small>{ campus.content }</small>
                </div>
              </Link>

              <button type="button" className="btn btn-danger" key={campus.id} onClick={(e)=> this.handleDelete(e, campus.id)}>Delete</button>

            </div>
          ))
        }
      </div>
    </div>
  )
  }
}
