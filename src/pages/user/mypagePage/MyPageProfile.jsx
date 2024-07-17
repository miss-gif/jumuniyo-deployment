import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  updateProfile,
} from "../../../features/user/userSlice";

const MyPageProfile = () => {
  const [cookies] = useCookies(["accessToken"]);
  const dispatch = useDispatch();
  const { profile, isLoading, error } = useSelector(state => state.user);

  const labels = {
    userId: "아이디",
    userNickname: "닉네임",
    userName: "이름",
    userPhone: "전화번호",
    mainAddr: "주소",
    userEmail: "이메일",
  };

  const [isEditing, setIsEditing] = useState({
    userId: false,
    userNickname: false,
    userName: false,
    userPhone: false,
    mainAddr: false,
    userEmail: false,
  });

  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(fetchUserProfile(cookies.accessToken));
    }
  }, [cookies.accessToken, dispatch]);

  const toggleEdit = key => {
    setIsEditing(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(updateProfile({ [name]: value }));
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mypage">
      <div className="mypage-inner">
        <div className="mypage__profile">
          <div className="mypage__profile-header">
            <h2 className="mypage__profile-title">회원정보</h2>
          </div>
        </div>
        <div className="mypage__info">
          {Object.keys(labels).map(key => (
            <div key={key} className="mypage__info-item">
              <p className="mypage__info-label">
                {labels[key]}({key})
              </p>
              {isEditing[key] ? (
                <input
                  className="mypage__info-input"
                  type="text"
                  name={key}
                  value={profile[key]}
                  onChange={handleChange}
                />
              ) : (
                <p className="mypage__info-value">
                  {key === "mainAddr"
                    ? `${profile.mainAddr.addr1} ${profile.mainAddr.addr2}`
                    : profile[key]}
                </p>
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
