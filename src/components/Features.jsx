import React from 'react'

const Features = (props) => {
   return (
      <div className="feature-item">
         <img src={props.icon} alt={props.icAlt} className="feature-icon" />
         <h3 className="feature-item-title">{props.title}</h3>
         <p>
            {props.descipt}
         </p>
      </div>
   )
}

export default Features