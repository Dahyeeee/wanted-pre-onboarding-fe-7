import axios from "axios";

export default axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: { "Content-Type": "application/json" },
});
