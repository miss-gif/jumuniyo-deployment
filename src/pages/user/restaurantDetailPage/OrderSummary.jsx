import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantityCount from "../../../components/common/QuantityCount";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ orderItems, updateQuantity }) => {
  const navigate = useNavigate();

  const calculateTotal = () =>
    orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrder = () => {
    // orderItems를 세션 스토리지에 저장
    sessionStorage.setItem("orderItems", JSON.stringify(orderItems));

    // 세션 스토리지에서 값을 불러와 콘솔에 출력
    const storedOrderItems = sessionStorage.getItem("orderItems");
    console.log("Stored Order Items:", JSON.parse(storedOrderItems));
    navigate("/payment");
  };

  return (
    <div className="order-summary">
      <div className="order-summary-content">
        <div className="order-summary__header">
          <h2 className="header__title">주문표</h2>
          <div className="header__icon">
            <DeleteIcon />
          </div>
        </div>
        <div className="order-summary__content-wrapper">
          {orderItems.map((item, index) => (
            <div key={index} className="order-summary__content">
              <div>{item.name}</div>
              <div className="order-summary__price-quantity">
                <div className="order-summary__wrap">
                  <div className="order-summary__delete-button">
                    <CloseIcon />
                  </div>
                  <div className="order-summary__price">
                    {item.price * item.quantity}원
                  </div>
                </div>
                <QuantityCount
                  quantity={item.quantity}
                  onChange={quantity => updateQuantity(item.name, quantity)}
                />
              </div>
            </div>
          ))}
          <div className="order-summary__total-amount">
            <p>총 결제 금액</p>
            <p>{calculateTotal()}원</p>
          </div>
        </div>
      </div>
      <div
        className="order-summary__submit-button"
        onClick={handleOrder} // 주문하기 버튼에 클릭 핸들러 추가
      >
        주문하기
      </div>
    </div>
  );
};

export default OrderSummary;
