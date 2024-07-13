import ToggleMenu from "../../../components/common/ToggleMenu";

const MenuCategory = ({ addToOrder, title }) => {
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
