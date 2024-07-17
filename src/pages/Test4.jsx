import React, { useState } from "react";
import Popup from "./Popup.jsx";
// import { kakaopay } from "../api/paymentModule.js";

const Test4 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [amount, setAmount] = useState(1000);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div>
        <input className="inputMonthH" type="hidden" />
        <input className="sessionuserID" type="hidden" value="user_id" />

        <input
          className="amountValue"
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button onClick={openPopup}>결제하기</button>
        {isPopupOpen && (
          <Popup
            onClose={closePopup}
            // onPay={kakaopay(amount)}
            amount={amount}
          />
        )}
      </div>
    </div>
  );
};

export default Test4;
