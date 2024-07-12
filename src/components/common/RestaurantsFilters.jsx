import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ModalMenuSearch from "../../pages/user/restaurantListPage/ModalMenuSearch";

const RestaurantsFilters = () => {
  const [isMenuSearchVisible, setMenuSearchVisible] = useState(false);
  const menuSearchRef = useRef(null);

  const onClickMenuSearch = () => {
    setMenuSearchVisible(!isMenuSearchVisible);
  };

  const handleClickOutside = event => {
    if (
      menuSearchRef.current &&
      !menuSearchRef.current.contains(event.target)
    ) {
      setMenuSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="background-color">
        <div className="inner">
          <div className="restaurants-page__filters">
            <button className="search-btn" onClick={onClickMenuSearch}>
              <SearchIcon />
            </button>
            <ul className="filters__list">
              <li className="filters__item btn-active">전체보기</li>
              <li className="filters__item">한식</li>
              <ModalMenuSearch
                menuSearchRef={menuSearchRef}
                isVisible={isMenuSearchVisible}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsFilters;
