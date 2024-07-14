import React, { useState } from "react";
import Modal from "react-modal";
import { TextField, Button } from "@mui/material";
import "./AddressModal.scss";

Modal.setAppElement("#root"); // This is to avoid accessibility issues

const AddressModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [receiver, setReceiver] = useState(initialData?.receiver || "");
  const [address, setAddress] = useState(initialData?.address || "");
  const [contact, setContact] = useState(initialData?.contact || "");

  const handleSave = () => {
    onSave({ name, receiver, address, contact });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="address-modal"
      overlayClassName="address-modal__overlay"
    >
      <h2 className="address-modal__heading">배송지 등록/수정</h2>
      <form className="address-modal__form">
        <TextField
          label="배송지명"
          value={name}
          onChange={e => setName(e.target.value)}
          className="address-modal__input"
        />
        <TextField
          label="수령인"
          value={receiver}
          onChange={e => setReceiver(e.target.value)}
          className="address-modal__input"
        />
        <TextField
          label="배송지"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="address-modal__input"
        />
        <TextField
          label="연락처"
          value={contact}
          onChange={e => setContact(e.target.value)}
          className="address-modal__input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          className="address-modal__button"
        >
          저장
        </Button>
      </form>
    </Modal>
  );
};

export default AddressModal;
