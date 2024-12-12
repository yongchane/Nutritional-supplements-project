import { create } from "zustand";
import axios from "axios";

// Zustand 스토어 생성
const useNewsStore = create((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));

const GetNews = async () => {
  try {
    const apiKey = process.env.REACT_APP_NEWS_KR_API_KEY;
    if (!apiKey) {
      throw new Error("REACT_APP_NEWS_KR_API_KEY가 정의되지 않았습니다.");
    }

    const response = await axios.get(
      `${apiKey}/v1/articles?keyword=영양&api_key=4781ba1fc1a74a4b98526701fac2da72`
    );
    // 스토어에 articles 설정
    useNewsStore.getState().setArticles(response.data || []);
    console.log("데이터", response, "확인", response.data);

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// 스토어 내보내기
export { GetNews, useNewsStore };
