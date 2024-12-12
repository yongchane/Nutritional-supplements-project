import axios from "axios";
import { create } from "zustand";

// Zustand store for managing login data
const useLoginStore = create((set) => ({
  loginData: {},
  setLoginData: (loginData) => set({ loginData }),
}));

// PostLogin function
const PostLogin = async (formData) => {
  const { email, password } = formData;

  try {
    const response = await axios.post("/api/user/login", {
      email,
      password,
    });

    // Save login data to Zustand store
    useLoginStore.getState().setLoginData(response.data);

    return response;
  } catch (error) {
    console.error("로그인 실패", error);
    alert("로그인에 실패했습니다. 다시 시도해주세요.");
  }
};

export default PostLogin;
