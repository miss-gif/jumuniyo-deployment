import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MenuCategory = ({ addToOrder }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: "한마리 ＋ 순살치킨",
      description: "국내산 하림닭 ／ 가심비 두 배 세트!",
      price: 23000,
      image: "https://picsum.photos/100/",
    },
    {
      name: "한마리 ＋ 간장치킨",
      description: "국내산 하림닭 ／ 가심비 두 배 세트!",
      price: 23000,
      image: "https://picsum.photos/100/",
    },
    {
      name: "한마리 ＋ 양념치킨",
      description: "국내산 하림닭 ／ 가심비 두 배 세트!",
      price: 23000,
      image: "https://picsum.photos/100/",
    },
  ];

  return (
    <div className="menu-category">
      <div className="toggle-category" onClick={toggleMenu}>
        <h4 className="menu-category__title">인기메뉴</h4>
        <div className="toggle-category-icon">
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      {isOpen && (
        <ul className="menu-category__list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="menu-category__item"
              onClick={() => addToOrder(item)}
            >
              <div className="menu-category__text">
                <div className="menu-category__name">{item.name}</div>
                <div className="menu-category__description">
                  {item.description}
                </div>
                <div className="menu-category__price">{item.price}원</div>
              </div>
              <div className="menu-category__image">
                <img src={item.image} alt={item.name} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuCategory;
