import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Account = (props) => {
   return (
      <section className="account">
         <div className="account-content-wrapper">
            <h3 className="account-title">{props.title}</h3>
            <p className="account-amount">{props.amount}</p>
            <p className="account-amount-description">{props.amountDescr}</p>
         </div>
         <div className="account-content-wrapper cta">
            <Link to={props.linkPath} className="account-button-link">
               <button className="transaction-button sheen-btn sheen">
                  {props.transButton}
               </button>
            </Link>
         </div>
      </section>
   );
};

export default Account;

Account.propTypes = {
   title: PropTypes.string,
   amount: PropTypes.string,
   amountDescr: PropTypes.string,
   linkPath: PropTypes.string,
   transButton: PropTypes.string,
};
