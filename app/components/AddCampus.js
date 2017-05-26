import React from 'react';

export default function AddCampus (props) {
    console.log('this this', props);

  const setNameValue = props.setNameValue;
  const setImgValue = props.setImgValue;
  const setContentValue = props.setContentValue ;
  const handleSubmit = props.handleSubmit;
  const warning = props.warning;

  return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Campus-Name</label>
          <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Campus Name" onChange={setNameValue}
                value={props.name}/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Photo</label>
          <input type="img" className="form-control" id="exampleInputEmail1" placeholder="Set image URL" onChange={setImgValue}
                value={props.img} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Content</label>
          <input type="content" className="form-control" id="exampleInputEmail1" placeholder="Content" onChange={setContentValue}
                value={props.content}/>
        </div>
        <button type="submit" className="btn btn-default" onClick={handleSubmit}>Submit</button>
      </form>
  );
}
