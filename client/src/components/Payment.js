import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { DEFAULT_CREDITS_AMOUNT_CENTES } from "../constants";
import { handleToken } from "../slices/authSlice";

export default function Payment() {
  const dispatch = useDispatch();
  const default_credits_amount_dollars = DEFAULT_CREDITS_AMOUNT_CENTES / 100;

  // Callback function called by StripeCheckout when payment is successful
  const onToken = (token) => {
    dispatch(handleToken(token));
  };

  return (
    <StripeCheckout
      description={`Pay ${default_credits_amount_dollars}$ for ${default_credits_amount_dollars} credits`}
      amount={DEFAULT_CREDITS_AMOUNT_CENTES}
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
}
