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



// <div className="col-md-6">
//        <img  src = "" align="middle"/>
              // <Link className="thumbnail" to={`/campuse/${album.id}`}>



// <h3>Campuses</h3>
//       <div className="row">
//             <div className="col-xs-6" >
//                 <img src="mybd.jpg"/>
//                 <div className="caption">
//                   <h5>
//                     <span>span</span>
//                   </h5>
//                   <small>App component</small>
//                 </div>

//             </div>
//       </div>
