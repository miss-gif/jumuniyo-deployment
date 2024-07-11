import React from "react";
import { CheckBox } from "@mui/icons-material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import QuantityCount from "../../../components/common/QuantityCount";
import CloseIcon from "@mui/icons-material/Close";

import "./MenuOrderModal.scss";

const MenuOrderModal = () => {
  return (
    <div className="modal-inner">
      <div className="menu-order-modal">
        <div className="menu-order-modal__header">
          <div className="menu-order-modal__back">133</div>
          <div className="menu-order-modal__title">메뉴상세</div>
          <div className="menu-order-modal__close-button">
            <CloseIcon />
          </div>
        </div>
        <div className="menu-order-modal__content">
          <div className="menu-order-modal__details">
            <img src="https://picsum.photos/100/" alt="메뉴 이미지" />
            <div className="menu-order-modal__name">
              [세트]직화무뼈불닭발+한마리(치킨선택)
            </div>
            <div className="menu-order-modal__description">
              닭발과 치킨의 완벽한 조합
            </div>
          </div>
          <div className="menu-order-modal__price-section">
            <div className="menu-order-modal__title">가격</div>
            <div className="menu-order-modal__price">24,900원</div>
          </div>
          <div className="menu-order-modal__required-option">
            <div className="menu-order-modal__title">치킨 선택 (필수 선택)</div>
            <div className="menu-order-modal__required-option-item">
              <RadioButtonCheckedIcon />
              <input type="radio" name="chicken" /> 뼈닭치킨
              <p>추가비용없음</p>
            </div>
          </div>
          <div className="menu-order-modal__additional-option">
            <div className="menu-order-modal__title">
              한마리 맛 선택 (필수 선택)
            </div>
            <div className="menu-order-modal__additional-option-item">
              <CheckBox />
              <input type="checkbox" /> 순살치킨
              <p>+500원</p>
            </div>
          </div>
          <div className="menu-order-modal__quantity">
            <div className="menu-order-modal__title">수량</div>
            <QuantityCount />
          </div>
          <div className="menu-order-modal__total-price">
            <div className="menu-order-modal__total-text">총 주문금액</div>
            <div className="menu-order-modal__total-amount">26,400원</div>
          </div>
        </div>
        <div className="menu-order-modal__footer">
          <div className="menu-order-modal__add-to-order menu-order-modal__btn">
            주문표에 추가
          </div>
          <div className="menu-order-modal__order-now menu-order-modal__btn">
            주문하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrderModal;
