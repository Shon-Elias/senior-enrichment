import React from 'react';
import { Link } from 'react-router';

export default function Campuses (props) {

  console.log("Hi PATRICK Campuses componant props", props);

  const campuses = props.campuses;


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
            </div>
          ))
        }
      </div>
    </div>
  )
}
