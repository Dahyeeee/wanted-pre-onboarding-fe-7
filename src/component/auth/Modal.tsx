import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Modal(props: {
  info: { message: string; redirect: string };
  show: (a: boolean) => void;
}) {
  const navigate = useNavigate();
  return (
    <>
      <PopupBackDrop
        onClick={() => {
          props.show(false);
          navigate("/");
        }}
      />
      <PopupBox>
        <Message> {props.info.message}</Message>
        <ConfirmBtn
          onClick={() => {
            props.show(false);
            navigate(props.info.redirect);
          }}
        >
          확인
        </ConfirmBtn>
      </PopupBox>
    </>
  );
}

const PopupBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #252424cc;
  height: 100%;
  width: 100vw;
`;

const PopupBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 408px;
  height: 237px;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transform: translate(170px, -300px);
`;

const Message = styled.div`
  margin: 2rem;
`;

const ConfirmBtn = styled.button`
  background-color: green;
  width: 344px;
  height: 48px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
`;
