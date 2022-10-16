import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";
import Modal from "../component/auth/Modal";
import SignForm from "../component/auth/SignForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    message: "",
    redirect: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token, navigate]);

  const handleLogin =
    (email: string, password: string) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const accessToken = await authApi.login(email, password);
        localStorage.setItem("token", accessToken);
        navigate("/todo");
      } catch {
        setShowModal(true);
        setModalInfo({
          message: "입력하신 이메일이 존재하지 않거나 비밀번호가 틀립니다.",
          redirect: "/",
        });
      }
    };

  return (
    <>
      <SignForm state="로그인" onSubmit={handleLogin} />
      {showModal && <Modal info={modalInfo} show={setShowModal} />}
    </>
  );
}
