import React, { useEffect, useState } from "react";

const PaymentOrderSummaty = () => {
  const [orderItems, setOrderItems] = useState([]);

  const calculateTotal = () =>
    orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    // 세션에서 orderItems 값 가져오기 (여기서는 localStorage에서 가져오는 것으로 가정)
    const storedOrderItems = sessionStorage.getItem("orderItems");
    if (storedOrderItems) {
      setOrderItems(JSON.parse(storedOrderItems));
    }
  }, []);

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

        {/* 결제 */}
        <div className="payment-page__total-amount">
          <p>총 결제 금액</p>
          <p>{calculateTotal()}원</p>
        </div>
      </div>
      <p className="payment-page__terms">
        <span>
          이용약관, 개인정보 수집 및 이용, 개인정보 제3자 제공 , 전자금융거래
          이용약관, 만 14세 이상 이용자
        </span>
        내용 확인하였으며 결제에 동의합니다.
      </p>
      <button className="payment-page__button">결제하기</button>
    </div>
  );
};

export default PaymentOrderSummaty;
