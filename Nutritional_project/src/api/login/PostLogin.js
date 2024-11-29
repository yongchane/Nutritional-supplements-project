import axios from "axios";
import { create } from "zustand";

const useLoginStore = create((set) => ({
  loginData: {},
  setLoginData: (loginData) => set({ loginData }),
}));

const PostLogin = async (formData) => {
  const { email, password } = formData;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/login`,
      {
        email: email,
        password: password,
      }
    );
    return response;
  } catch (error) {
    console.log("로그인 실패", error);
    alert("로그인에 실패했습니다. 다시 시도해주세요.");
  }
};

export default PostLogin;
