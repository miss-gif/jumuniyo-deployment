import React, { useState } from "react";
import AddressModal from "./AddressModal";
import "./MyPageAddrList.scss";

const MyPageAddrList = () => {
  const [addresses, setAddresses] = useState([
    {
      name: "Home",
      receiver: "John Doe",
      contact: "010-1234-5678",
      address: "123 Seoul St, Gangnam-gu, Seoul",
    },
    {
      name: "Office",
      receiver: "Jane Smith",
      contact: "010-8765-4321",
      address: "456 Busan Rd, Haeundae-gu, Busan",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleAdd = () => {
    setCurrentAddress(null);
    setIsModalOpen(true);
  };

  const handleEdit = index => {
    setCurrentAddress(addresses[index]);
    setIsModalOpen(true);
  };

  const handleSave = address => {
    if (currentAddress) {
      setAddresses(
        addresses.map(addr => (addr === currentAddress ? address : addr)),
      );
    } else {
      setAddresses([...addresses, address]);
    }
  };

  return (
    <div className="mypage-addr-list">
      <h2 className="mypage-addr-list__heading">배송지 관리</h2>

      <header className="mypage-addr-list__header">
        <div className="mypage-addr-list__header-item">주소목록</div>
        <div className="mypage-addr-list__header-item">최근주소</div>
      </header>

      <ul className="mypage-addr-list__list">
        {addresses.map((address, index) => (
          <li key={index} className="mypage-addr-list__item">
            <div className="mypage-addr-list__item-top">
              <div className="mypage-addr-list__item__name">{address.name}</div>
              <div className="mypage-addr-list__button">
                <button
                  className="mypage-addr-list__button mypage-addr-list__button--edit"
                  onClick={() => handleEdit(index)}
                >
                  수정
                </button>
                <button
                  className="mypage-addr-list__button mypage-addr-list__button--delete"
                  onClick={() =>
                    setAddresses(addresses.filter((_, i) => i !== index))
                  }
                >
                  삭제
                </button>
              </div>
            </div>
            <div className="mypage-addr-list__item__contact">
              {address.contact}
            </div>
            <div className="mypage-addr-list__item__address">
              {address.address}
            </div>
          </li>
        ))}
      </ul>
      <div className="mypage-addr-list__info">
        ❗배송지는 최대 15개까지 등록하실 수 있습니다.
      </div>
      <button
        className="mypage-addr-list__button mypage-addr-list__button--add"
        onClick={handleAdd}
      >
        배송지 등록
      </button>
      <AddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={currentAddress}
      />
    </div>
  );
};

export default MyPageAddrList;
