import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const MyPageProfile = () => {
  const [cookies] = useCookies(["accessToken"]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "/api/user-info";
  const TOKEN = {
    headers: {
      Authorization: `Bearer ${cookies.accessToken}`,
    },
  };

  const [profile, setProfile] = useState({
    userId: "",
    userName: "",
    userNickname: "",
    userPhone: "",
    mainAddr: "",
  });

  const [isEditing, setIsEditing] = useState({
    userId: false,
    userNickname: false,
    userName: false,
    userPhone: false,
    mainAddr: false,
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(API_URL, TOKEN);
        if (res.data.statusCode === 1) {
          setProfile({
            userId: res.data.resultData.userId,
            userName: res.data.resultData.userName,
            userNickname: res.data.resultData.userNickname,
            userPhone: res.data.resultData.userPhone,
            mainAddr: res.data.resultData.mainAddr || "",
          });
        } else {
          setError(res.data.resultMsg);
        }
      } catch (error) {
        setError("정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [cookies.accessToken]);

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
