function TransTitle(props) {
   return (
      <section className="titleSection">
         <div className="titleSection-content-wrapper">
            <h3 className="titleSection-title">{props.title}</h3>
            <p className="titleSection-amount">{props.amount}</p>
            <p className="titleSection-amount-description">
               {props.amountDescr}
            </p>
         </div>
      </section>
   );
}

export default TransTitle;
