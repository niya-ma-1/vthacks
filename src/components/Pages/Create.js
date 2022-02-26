import React from "react";
import '../Styles.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";



export const Create = () => {
  
  return (
   <div>
     <div className="box" style={{fontSize:20}}>
       Submit your funding request
     </div>
     <form>
      <div className='box'>
      <label>
        Title:
      </label>
      <div className='box'>
        <input type="text" name="title" /></div>
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
        <input type="text" name="category" /></div>
      </div>
      <div className='box' >
      <label>
        Funding goal:
      </label>
      <div className='box'>$
        <input type="text" name="funding goal" /></div>
      </div>
      </form>
   </div>
  );
};
