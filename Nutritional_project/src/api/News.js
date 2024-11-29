import { create } from "zustand";
import axios from "axios";

// Zustand 스토어 생성
const useNewsStore = create((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));

const GetNews = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_NEWS_API_KEY}/v2/top-headlines?q=health&apiKey=e6a9b70aea5a4dd1b265f13208bebe74`
    );
    // 스토어에 articles 설정
    useNewsStore.getState().setArticles(response.data.articles || []);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// 스토어 내보내기
export { GetNews, useNewsStore };
