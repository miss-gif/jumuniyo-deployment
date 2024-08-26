import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import "./UserSignupPage.scss";

// Zod schema 정의
const schema = z
  .object({
    email: z.string().email("유효한 이메일 주소를 입력해주세요."),
    emailCode: z.string().min(6, "인증 코드를 입력해주세요."),
    username: z.string().min(8, "아이디는 8자 이상이어야 합니다."),
    password: z
      .string()
      .min(
        8,
        "비밀번호는 8자 이상이어야 하며 특수문자와 숫자를 포함해야 합니다.",
      )
      .regex(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])/,
        "비밀번호는 특수문자와 숫자를 포함해야 합니다.",
      ),
    confirmPassword: z.string().min(8, "비밀번호 확인을 입력해주세요."),
    userName: z.string().min(2, "이름을 입력해주세요."),
    userNickname: z.string().min(2, "닉네임을 입력해주세요."),
    userPhone: z
      .string()
      .regex(/^\d{3}-\d{3,4}-\d{4}$/, "유효한 전화번호를 입력해주세요."),
    privacy: z
      .boolean()
      .refine(val => val, "개인정보 수집 및 이용에 동의해야 합니다."),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

const UserSignupPage = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleAllCheck = e => {
    const { checked } = e.target;
    setAllChecked(checked);
    setPrivacyChecked(checked);
  };

  const handlePrivacyCheck = e => {
    const { checked } = e.target;
    setPrivacyChecked(checked);
    if (!checked) setAllChecked(false);
  };

  const sendEmailCode = async email => {
    try {
      const response = await axios.post("/api/mail/send", { email });
      alert(response.data.resultMsg);
    } catch (error) {
      console.error("이메일 인증번호 전송 오류:", error);
      alert("인증번호 전송에 실패했습니다.");
    }
  };

  const verifyEmailCode = async (email, authNum) => {
    try {
      const response = await axios.post("/api/mail/auth_check", {
        email,
        authNum,
      });
      alert(response.data.resultMsg);
    } catch (error) {
      console.error("인증 코드 확인 오류:", error);
      alert("인증 코드 확인에 실패했습니다.");
    }
  };

  const checkUsernameDuplicate = async username => {
    try {
      const response = await axios.get(
        `/api/is-duplicated?user_id=${username}`,
      );
      if (response.data.statusCode !== 1) {
        setError("username", {
          type: "manual",
          message: "사용할 수 없는 아이디입니다.",
        });
      } else {
        alert(response.data.resultMsg);
      }
    } catch (error) {
      console.error("아이디 중복 확인 오류:", error);
      alert("아이디 중복 확인에 실패했습니다.");
    }
  };

  const onSubmit = async () => {
    const pic = new FormData();

    // getValues를 사용해 폼 필드의 값을 가져옵니다.
    const p = {
      user_id: getValues("username"),
      user_pw: getValues("password"),
      user_pw_confirm: getValues("confirmPassword"),
      user_name: getValues("userName"),
      user_nickname: getValues("userNickname"),
      user_phone: getValues("userPhone"),
      user_email: getValues("email"),
      auth_num: getValues("emailCode"),
    };

    // JSON 데이터를 문자열로 변환하고 FormData에 추가
    pic.append("p", JSON.stringify(p));

    // 파일 데이터 추가 (선택 사항)
    const userImgFile = getValues("userImgFile");
    if (userImgFile) {
      pic.append("pic", userImgFile); // 파일 추가
    }
    pic.append("p", JSON.stringify(p)); // JSON 객체 추가

    try {
      // 헤더 설정 없이 FormData를 전송
      const response = await axios.post("/api/sign-up", pic);
      alert(response.data.resultMsg);
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="signup">
      <h1 className="signup__title">사용자 회원가입</h1>
      <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="email">
            이메일
          </label>
          <input
            className="signup__input"
            type="email"
            id="email"
            {...register("email")}
          />
          <p className="signup__error">{errors.email?.message}</p>
          <button
            className="signup__email-button"
            type="button"
            onClick={() => sendEmailCode(getValues("email"))}
          >
            인증번호 전송
          </button>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="emailCode">
            코드 입력
          </label>
          <input
            className="signup__input"
            type="text"
            id="emailCode"
            {...register("emailCode")}
          />
          <p className="signup__error">{errors.emailCode?.message}</p>
          <button
            className="signup__code-button"
            type="button"
            onClick={() =>
              verifyEmailCode(getValues("email"), getValues("emailCode"))
            }
          >
            확인
          </button>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="username">
            아이디
          </label>
          <input
            className="signup__input"
            type="text"
            id="username"
            {...register("username")}
          />
          <p className="signup__error">{errors.username?.message}</p>
          <button
            className="signup__id-button"
            type="button"
            onClick={() => checkUsernameDuplicate(getValues("username"))}
          >
            중복확인
          </button>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="password">
            비밀번호
          </label>
          <input
            className="signup__input"
            type="password"
            id="password"
            {...register("password")}
          />
          <p className="signup__error">{errors.password?.message}</p>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="confirmPassword">
            비밀번호 확인
          </label>
          <input
            className="signup__input"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="signup__error">{errors.confirmPassword?.message}</p>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="userName">
            이름
          </label>
          <input
            className="signup__input"
            type="text"
            id="userName"
            {...register("userName")}
          />
          <p className="signup__error">{errors.userName?.message}</p>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="userNickname">
            닉네임
          </label>
          <input
            className="signup__input"
            type="text"
            id="userNickname"
            {...register("userNickname")}
          />
          <p className="signup__error">{errors.userNickname?.message}</p>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="userPhone">
            전화번호
          </label>
          <input
            className="signup__input"
            type="text"
            id="userPhone"
            {...register("userPhone")}
          />
          <p className="signup__error">{errors.userPhone?.message}</p>
        </div>
        <div className="signup__terms">
          <div className="signup__terms-group">
            <input
              className="signup__checkbox"
              type="checkbox"
              id="all-terms"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <label
              className="signup__label signup__label--checkbox"
              htmlFor="all-terms"
            >
              전체 동의
            </label>
          </div>
          <div className="signup__terms-group">
            <input
              className="signup__checkbox"
              type="checkbox"
              id="privacy"
              {...register("privacy")}
              checked={privacyChecked}
              onChange={handlePrivacyCheck}
            />
            <label
              className="signup__label signup__label--checkbox"
              htmlFor="privacy"
            >
              개인정보 수집 및 이용 동의 (필수)
            </label>
            <p className="signup__error">{errors.privacy?.message}</p>
          </div>
        </div>
        <button className="signup__button" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default UserSignupPage;
