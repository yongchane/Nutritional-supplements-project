import axios from "axios";

export const PostLogOut = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/logout`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("로그아웃 실패", error);
  }
};

export default PostLogOut;
