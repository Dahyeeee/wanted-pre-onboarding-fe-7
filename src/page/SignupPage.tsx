import React, { useState } from "react";
import { authApi } from "../api/authApi";
import Modal from "../component/auth/Modal";
import SignForm from "../component/auth/SignForm";

export default function SignupPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    message: "",
    redirect: "",
  });

  const handleSignup =
    (email: string, password: string) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const accessToken = await authApi.singup(email, password);
        if (accessToken) {
          setShowModal(true);
          setModalInfo({ message: "회원가입에 성공하셨습니다", redirect: "/" });
        }
      } catch {
        setShowModal(true);
        setModalInfo({
          message: "회원가입에 실패하셨습니다. 다시 시도해주세요.",
          redirect: "/signup",
        });
      }
    };
  return (
    <>
      <SignForm state="회원가입" onSubmit={handleSignup} />;
      {showModal && <Modal info={modalInfo} show={setShowModal} />}
    </>
  );
}
