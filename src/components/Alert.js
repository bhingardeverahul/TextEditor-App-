import React from 'react'
import './switch.css';
function Alert({alert}) {
  //uppercase a letter
  const capitalize=(word)=>{
 const lower=word.toLowerCase();
 return lower.charAt(0).toUpperCase() +lower.slice(1)
  }
   return (
    <div style={{height:"70px"}}>
      {alert&&<div className={`alert alert-${alert.type} alert-dismissible fade show`}role="alert">    
        <strong>{capitalize(alert.type)}</strong>: {alert.message} 
    </div>}
    </div>
   )
}

export default Alert
