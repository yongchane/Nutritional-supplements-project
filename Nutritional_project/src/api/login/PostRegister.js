import axios from "axios";

const PostRegister = async (formData) => {
  const { nickname, email, password } = formData;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/api/user/register`,
      {
        nickname: nickname,
        email: email,
        password: password,
      }
    );
    const { accessToken } = response.data;

    sessionStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.log("회원가입 실패", error);
    alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
  }
};

export default PostRegister;
