import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

const EMAIL_REG = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function SignForm(props: { state: string; onSubmit: any }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Wrapper>
      <FormStyle onSubmit={props.onSubmit(email, password)}>
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
      </FormStyle>
      <div>
        {props.state === "로그인" ? (
          <Link to={"/signup"}>회원가입하러 가기</Link>
        ) : (
          <Link to={"/"}>로그인하러 가기</Link>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormStyle = styled.form`
  margin-top: 15rem;
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
  margin-bottom: 2rem;
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
