import { useState } from "react";

const MyPageProfile = () => {
  const [isEditing, setIsEditing] = useState({
    아이디: false,
    닉네임: false,
    이름: false,
    전화번호: false,
    주소: false,
    이메일: false,
  });

  const [profile, setProfile] = useState({
    아이디: "",
    닉네임: "",
    이름: "",
    전화번호: "",
    주소: "",
    이메일: "",
  });

  const toggleEdit = key => {
    setIsEditing(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
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
            <h2 className="mypage__profile-title">회원정보</h2>
          </div>
        </div>
        <div className="mypage__info">
          {Object.keys(profile).map(key => (
            <div key={key} className="mypage__info-item">
              <p className="mypage__info-label">{key}</p>
              {isEditing[key] ? (
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
              <button
                className="mypage__edit-button"
                type="button"
                onClick={() => toggleEdit(key)}
              >
                {isEditing[key] ? "저장" : "수정"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPageProfile;
