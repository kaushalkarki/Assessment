import React from 'react'
import "./index.css" ;
// import Sdata from './Sdata';

const Card = (props) => {
  
  return(
    <>
   < div className   >  
    
    
      <div className ="Innerdiv">
      <img className="Logo" src ={props.image} alt="TVD"/>
      <h2>{props.name}</h2>
      
      Genre  <h3> {props.genre}</h3>
      </div>
  
    </div>
    </>
  );
  
  
}

export default Card;
