import { useState } from "react";
import MypageModifyModal from "../components/common/mypage/MypageModifyModal";

const MyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    아이디: "",
    비밀번호: "",
    이름: "",
    닉네임: "",
    연락처: "",
  });

  const onModify = () => {
    setIsModalOpen(true);
  };

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="mypage">
      <div className="mypage-inner">
        <div className="mypage__profile">
          <div className="mypage__profile-header">
            <h2 className="mypage__profile-title">개인정보 변경</h2>
          </div>
        </div>
        <div className="mypage__info">
          {Object.keys(profile).map(key => (
            <div key={key} className="mypage__info-item">
              <p className="mypage__info-label">{key}</p>
              {isEditing ? (
                <input
                  className="mypage__info-input"
                  type="text"
                  name={key}
                  value={profile[key]}
                  onChange={handleChange}
                />
              ) : (
                <p className="mypage__info-value">{profile[key]}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mypage__actions">
          <button className="mypage__button" type="button" onClick={onEdit}>
            {isEditing ? "저장" : "수정"}
          </button>
        </div>
        {isModalOpen ? <MypageModifyModal /> : onModify}
      </div>
    </div>
  );
};

export default MyPage;
