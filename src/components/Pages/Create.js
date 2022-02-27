import React, { useState} from "react";
import '../Styles.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";


export const Create = () => {
  const [inputs, amount] = useState({});
  const data = [];
  const handleSubmit = (event) => {
    data.push(event);
    console.log(inputs);
    }

  return (
   < div style={{backgroundColor: '#8C93A8', height:'100vh'}}>
     <div className="box" style={{fontSize:20}}>
       Submit your funding request
     </div>
     <form onSubmit={handleSubmit}>
      <div className='box'>
      <label>
        Title:
      </label>
      <div className='box' >
        <input type="text" name="title" value={inputs.title}/></div>
      </div>
      <div className='box' >
      <label>
        Discription:
      </label>
      <div className='box'>
        <input type="text" name="discription" /></div>
      </div>
      <div className='box' >
      <label>
        Category:
      </label>
      <div className='box'>
        <select>
          <option value="Orange">Medical</option>
          <option value="Radish">Philanthropic</option>
          <option value="Cherry">Other</option>
        </select>
        </div>
      </div>
      <div className='box' >
      <label>
        Funding goal:
      </label>
      <div className='box'>$
        <input type="text" name="funding goal" /></div>
      </div>
      <input type="submit" value="Submit" style={{}} />
      </form>
   </div>
  );
};
