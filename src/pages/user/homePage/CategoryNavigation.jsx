import React from "react";
import useCategories from "../../../hooks/useCategories";
import { useNavigate } from "react-router-dom";
import { fetchRestaurantList } from "../../../api/fetchRestaurantlist";

const CategoryNavigation = () => {
  const { categories, loading, error } = useCategories();
  const navigate = useNavigate();

  const onClickSearch = categoryPk => {
    fetchRestaurantList(categoryPk); // 카테고리별 식당 리스트를 가져옵니다.
    navigate("/restaurants"); // 식당 리스트 페이지로 이동합니다.
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <>
      <h2 className="hidden">카테고리 선택 메뉴</h2>
      <section className="category">
        <ul className="category__list">
          <li
            className="category__item border-set bc"
            onClick={() => onClickSearch(0)} // 수정된 부분
          >
            <p>전체보기</p>
          </li>
          {categories.map(category => (
            <li
              key={category.categoryPk}
              className="category__item border-set bc"
              onClick={() => {
                console.log(category.categoryPk);
                onClickSearch(category.categoryPk);
              }}
            >
              <p>{category.categoryName}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CategoryNavigation;
