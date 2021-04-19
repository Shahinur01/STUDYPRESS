import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IeAbiBfp15vmd1ynyZOIQgbHInTbuYtmf1FC757ppNG8shSp0dnHI81ENwA2Rwng5W0IQ9Qor4aEKZlZJsPsI8N00lcY1iQhl"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
     <SimpleCardForm>  </SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
