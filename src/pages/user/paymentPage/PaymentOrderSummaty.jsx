import React from "react";

const PaymentOrderSummaty = () => {
  return (
    <div className="payment-page__order-summary">
      <h2 className="payment-page__title">주문내역</h2>
      <div className="payment-page__warp-border">
        <h3 className="payment-page__restaurant-name">
          뉴욕버거앤치킨-대구남산점
        </h3>
        <ul>
          <li className="payment-page__order-item">
            <p>
              우삼겹 투움바 파스타 <span>x 1개</span>
            </p>
            <p>23,000원</p>
          </li>
          <li className="payment-page__order-item">
            <p>
              우삼겹 투움바 파스타 <span>x 1개</span>
            </p>
            <p>23,000원</p>
          </li>
          <li className="payment-page__order-item">
            <p>
              우삼겹 투움바 파스타 <span>x 1개</span>
            </p>
            <p>23,000원</p>
          </li>
        </ul>

        {/* 결제 */}
        <div className="payment-page__total-amount">
          <p>총 결제 금액</p>
          <p>23,000원</p>
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
