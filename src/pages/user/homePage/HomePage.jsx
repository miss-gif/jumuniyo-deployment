import React from "react";
import NewRestaurantListCarousel from "./NewRestaurantListCarousel";
import RecommendationCarousel from "./RecommendationCarousel";
import CategoryNavigation from "./CategoryNavigation";
import RecentOrderCarousel from "./RecentOrderCarousel";

const HomePage = () => {
  return (
    <div className="home-page">
      <CategoryNavigation />
      <section className="section-carousel none">
        <h3 className="section__title">
          <span>nickname</span>님을 위한 추천
        </h3>
        <RecommendationCarousel />
      </section>
      <section className="section-carousel none">
        <h3 className="section__title">새로 들어왔어요!</h3>
        <NewRestaurantListCarousel />
      </section>
      <section className="section-carousel none">
        <h3 className="section__title">최근에 주문한 메뉴</h3>
        <RecentOrderCarousel />
      </section>
    </div>
  );
};

export default HomePage;
