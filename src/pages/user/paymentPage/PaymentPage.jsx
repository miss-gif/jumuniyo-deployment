import React from "react";
import PaymentOrderSummary from "./PaymentOrderSummary";
import PaymentSection from "./PaymentSection";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <PaymentSection />
      <PaymentOrderSummary />
    </div>
  );
};

export default PaymentPage;
