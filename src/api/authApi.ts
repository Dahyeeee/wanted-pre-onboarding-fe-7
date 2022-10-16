import axios from "./axios";

const LOGIN_URL = "/auth/signin";
const SIGNUP_URL = "/auth/signup";

export const authApi = {
  singup: async (email: string, password: string) => {
    const response = await axios.post(
      SIGNUP_URL,
      JSON.stringify({ email, password })
    );
    const accessToken = response?.data?.access_token;
    return accessToken;
  },

  login: async (email: string, password: string) => {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({ email, password })
    );
    const accessToken = response?.data?.access_token;
    return accessToken;
  },
};
