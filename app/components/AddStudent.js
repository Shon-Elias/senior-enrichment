import React from 'react';

export default function AddStudent (props) {
    console.log('this ADDStudent', props);

  const setNameValue = props.setNameValue;
  const setEmailValue = props.setEmailValue;
  const handleSubmit = props.handleSubmit;
  const warning = props.warning;

  return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Student-Name</label>
          <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Student Name" onChange={setNameValue}
                value={props.name}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="content" className="form-control" id="exampleInputEmail1" placeholder="E-mail" onChange={setEmailValue}
                value={props.email}/>
        </div>
        <button type="submit" className="btn btn-default" onClick={handleSubmit}>Submit</button>
      </form>
  );
}

