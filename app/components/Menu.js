import React from 'react';
import { Link } from 'react-router';

const Menu = (props) => {
  // const cmapuses = props;
  console.log("Menu component", props);

  return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
       <Link to='/' className="navbar-brand">Hamilton Academy</Link>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul className="nav navbar-nav">
        <li ><Link to='/campuses' className="navbar-brand-nav">Campuses</Link></li>
        <li><Link to='/students' className="navbar-brand-nav">Students</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </ul>
    </div>
  </div>
</nav>


  )


}


export default Menu;



//  use className="active" to set the selected tab: campuses, students home


// <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
