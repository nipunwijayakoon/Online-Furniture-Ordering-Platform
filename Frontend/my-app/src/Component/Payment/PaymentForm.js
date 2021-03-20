import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import ReactDOM from "react-dom";


import "react-toastify/dist/ReactToastify.css";

toast.configure();


export default function PaymentForm() {
    const [product] = React.useState({
    name: "TEST",
    price: 21,
    description: "TEST"
  });
  async function handleToken(token, addresses) {
    const response = await axios.post(
     "https://jbyxu.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success!", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
    
  }
  

  return (
   
        <div className="total">
                        <StripeCheckout
        stripeKey="pk_test_51ITpooBz4mLaChc2sg2BhDzyatQlXTV29mqiXJlot5wOErD6esMFiXMZJnhmo83QbNR0Nk9hUI6uEHd7swYxjLEz00zxU5Uqmn"
        token={handleToken}
        //amount={context.getTotal * 100}
        name="LANKA FURNITURES"
        // billingAddress
        // shippingAddress
        currency="LKR"
        
      /> 

    
       
        </div>
 
   );
}

