/* eslint-disable @typescript-eslint/no-unused-vars */
import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; // react-router-dom의 useNavigate를 임포트합니다.

const PaymentOrderSummary = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수를 가져옵니다.

  const calculateTotal = () =>
    orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const storedOrderItems = sessionStorage.getItem("orderItems");
    if (storedOrderItems) {
      setOrderItems(JSON.parse(storedOrderItems));
    }
  }, []);

  const handlePayment = async () => {
    const data = {
      order_res_pk: 1,
      order_request: "요청사항",
      payment_method: "현장결제",
      order_phone: "전화번호",
      order_address: "배달주소",
      menu_pk: [1],
    };

    try {
      const res = await axios.post("/api/order/", data, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      });

      if (res.data.statusCode === 1) {
        alert(res.data.resultMsg);
        navigate(`/orderview/${res.data.resultData}`);
      } else {
        alert("결제에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("결제에 실패했습니다. 다시 시도해주세요.");
      console.log(error);
    }
  };

  return (
    <div className="payment-page__order-summary">
      <h2 className="payment-page__title">주문내역</h2>
      <div className="payment-page__warp-border">
        <h3 className="payment-page__restaurant-name">
          뉴욕버거앤치킨-대구남산점
        </h3>
        <ul>
          {orderItems.map((item, index) => (
            <li key={index} className="payment-page__order-item">
              <p>
                {item.name} <span>x {item.quantity}개</span>
              </p>
              <p>{item.price.toLocaleString()}원</p>
            </li>
          ))}
        </ul>

        <div className="payment-page__total-amount">
          <p>총 결제 금액</p>
          <p>{calculateTotal()}원</p>
        </div>
      </div>
      <p className="payment-page__terms">
        <span>
          이용약관, 개인정보 수집 및 이용, 개인정보 제3자 제공 , 전자금융거래
          이용약관, 만 14세 이상 이용자입니다.
        </span>
        <label className="agreement-checkbox">
          결제에 동의합니다.
          <Checkbox sx={{ padding: 0 }} />
        </label>
      </p>
      <button
        className="payment-page__button payment-btn"
        onClick={handlePayment}
      >
        결제하기
      </button>
    </div>
  );
};

export default PaymentOrderSummary;
