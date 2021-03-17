import React, { Component } from 'react';
import './WoodNameColor.css';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <div className="Success" style={{ backgroundImage: "url('https://images.pexels.com/photos/3773582/pexels-photo-3773582.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>

         <div> 
            <h1>Thank You For Your Submission</h1>
            </div>  
            <div>
           <hr />
            <h3>You will receive an email with further instructions. One of our manager will be contacted you via email or mobile...</h3>
            </div>
      </div>  
    );
  }
}

export default Success;