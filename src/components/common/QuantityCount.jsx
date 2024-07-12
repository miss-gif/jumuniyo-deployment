import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantityCount = ({ quantity, onChange }) => {
  const handleIncrease = () => {
    onChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-count">
      <div className="quantity-count__decrease-button" onClick={handleDecrease}>
        <RemoveIcon />
      </div>
      <div className="quantity-count__current-quantity">{quantity}</div>
      <div className="quantity-count__increase-button" onClick={handleIncrease}>
        <AddIcon />
      </div>
    </div>
  );
};

export default QuantityCount;
