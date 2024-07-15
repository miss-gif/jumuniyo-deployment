import React from "react";
import PaymentOrderSummaty from "./PaymentOrderSummaty";
import PaymentSection from "./PaymentSection";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <PaymentSection />
      <PaymentOrderSummaty />
    </div>
  );
};

export default PaymentPage;
