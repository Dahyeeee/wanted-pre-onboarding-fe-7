import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignForm from "../component/auth/SignForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token, navigate]);

  return <SignForm state="로그인" />;
}
