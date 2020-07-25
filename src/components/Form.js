import React, { Fragment } from "react";
import './styles/Form.css';

const Form = ({Submit,changeurl}) => {
    return(
    <div className="form">
          <input className="form-input"
          onChange = {(e)=>changeurl(e.target.value)}
          name="fullurl"
          autoComplete="off"
          placeholder="Shorten your link" 
          type="text"/>
          <button className="btn" onClick={Submit}>Shrink</button>
      </div>
  
    )
}

export default Form;