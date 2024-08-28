import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../slices/authSlice";

export default function Payment() {
  const dispatch = useDispatch();

  // Callback function called by StripeCheckout when payment is successful
  const onToken = (token) => {
    dispatch(handleToken(token));
  };

  return (
    <StripeCheckout
      description="Pay $5 for 5 credits"
      amount={500} // Amount in cents (5 dollars)
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
}
