import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../api/axios";
import Modal from "./Modal";

const EMAIL_REG = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const LOGIN_URL = "/auth/signin";
const SIGNUP_URL = "/auth/signup";

export default function SignForm(props: { state: string }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password })
      );
      const accessToken = response?.data?.access_token;
      localStorage.setItem("token", accessToken);
      navigate("/todo");
    } catch {
      console.log("Login failed");
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ email, password })
      );
      const accessToken = response?.data?.access_token;
      if (accessToken) {
        setMsg("회원가입에 성공하셨습니다.");
        setShowModal(true);
      }
    } catch {
      console.log("Signup failed");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={props.state === "로그인" ? handleLogin : handleSignup}>
        <InputBox>
          <label>이메일</label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <label>비밀번호</label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value.trim())}
          />
        </InputBox>
        <ButtonSt
          type="submit"
          disabled={!(EMAIL_REG.test(email) && password.length >= 8)}
        >
          {props.state}
        </ButtonSt>
      </form>
      {showModal && <Modal message={msg} show={setShowModal} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  width: 322px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #606060;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;
  font-size: 18px;
  margin-top: 10px;
  width: 90%;

  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

const ButtonSt = styled.button`
  width: 322px;
  height: 48px;
  font-size: 16px;
  background: #00b992;
  border-radius: 6px;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: rgba(23, 23, 23, 0.25);
  }
`;
