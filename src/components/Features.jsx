import React from 'react';
import { PropTypes } from 'prop-types';

const Features = (props) => {
   return (
      <div className="feature-item">
         <img src={props.icon} alt={props.icAlt} className="feature-icon" />
         <h3 className="feature-item-title">{props.title}</h3>
         <p>{props.descipt}</p>
      </div>
   );
};

export default Features;

Features.propTypes = {
   icon: PropTypes.string,
   icAlt: PropTypes.string,
   title: PropTypes.string,
   descipt: PropTypes.string,
};
