import React from 'react';  // , {Component}
import MenuContainer from '../containers/MenuContainer';
// import JoinUs

export default function App ({ children }) {

  console.log("App component children", children);

  return (
    <div id="main" className="container-fluid" >
      <div>
        <MenuContainer />
      </div>
      <div >
        {children ?
        <div>{ children }</div> :
        <img src="mybd.jpg" />
        }
      </div>

    </div>
  );
}


