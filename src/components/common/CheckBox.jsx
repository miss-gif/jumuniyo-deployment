import React from "react";

import "./CheckBox.scss";

const CheckBox = () => {
  return (
    <div className="checkbox-wrapper-4">
      <input className="inp-cbx" id="morning" type="checkbox" />
      <label className="cbx" htmlFor="morning">
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check-4"></use>
          </svg>
        </span>
        <span>Morning</span>
      </label>
      <svg className="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default CheckBox;
