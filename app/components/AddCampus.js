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

/*
 <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label for="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile"/>
          <p className="help-block">Example block-level help text here.</p>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/> Check me out
          </label>
        </div>
        */
