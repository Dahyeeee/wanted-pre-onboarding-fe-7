import React, { useState } from "react";
import styled from "styled-components";

const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function SignForm(props: { state: string }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <form method="post">
      <InputBox>
        <label>이메일</label>
        <div>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </InputBox>
      <InputBox>
        <label>비밀번호</label>
        <div>
          <InputField
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value.trim())}
          />
        </div>
      </InputBox>

      <ButtonSt
        type="submit"
        disabled={!(emailReg.test(email) && pw.length >= 8)}
      >
        {props.state}
      </ButtonSt>
    </form>
  );
}

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
