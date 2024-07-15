import ToggleMenu from "../../../components/common/ToggleMenu";

const MenuCategory = ({ addToOrder, title, restaurantDetails }) => {
  const menuItems = restaurantDetails.menuList.map(menu => ({
    name: menu.menu_name,
    description: menu.menu_content,
    price: menu.menu_price,
    image: menu.menu_pic || "https://picsum.photos/100/", // Default image if none provided
  }));

  return (
    <ToggleMenu title={title}>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="menu-category__item"
          onClick={() => addToOrder(item)}
        >
          <div className="menu-category__text">
            <div className="menu-category__name">{item.name}</div>
            <div className="menu-category__description">{item.description}</div>
            <div className="menu-category__price">{item.price}원</div>
          </div>
          <div className="menu-category__image">
            <img src={item.image} alt={item.name} />
          </div>
        </li>
      ))}
    </ToggleMenu>
  );
};

export default MenuCategory;
