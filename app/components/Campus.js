import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {

  console.log("MAYBE Campus componant props", props);

  const campus = props.selectedCampus;


  return (
  <div>
      <h3>Campus</h3>
      <div className="row">
        {
          campus ? (
            <div className="col-xs-6" key={ campus.id }>
              <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                <img src={ campus.img }/>
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                  <small>{ campus.content }</small>
                </div>
              </Link>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}
