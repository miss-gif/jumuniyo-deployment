import React from "react";
import { kakaopay } from "../api/paymentModule";
// import "../../public/images/icon_kakao.png";

const Popup = ({ onClose, amount }) => {
  return (
    <div className="popup">
      <div className="pwrap">
        <button className="closebtn" onClick={onClose}>
          X
        </button>
        <div>
          <h1>결제하기</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="#" onClick={kakaopay(amount)}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon_kakao.png"}
                    alt="Logo"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <h3 className="amount">결제 금액 : {amount}원</h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
