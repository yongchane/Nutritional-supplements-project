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

    // 환경에 따라 API URL 분기 처리
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "/api/news" // 배포 환경에서는 프록시 경로 사용
        : `${apiKey}/v1/articles`; // 로컬 환경에서는 기존 API 직접 호출

    const response = await axios.get(baseUrl, {
      params:
        process.env.NODE_ENV === "production"
          ? { keyword: "영양" } // 배포 환경에서는 프록시에서 쿼리 파라미터 처리
          : { keyword: "영양", api_key: "4781ba1fc1a74a4b98526701fac2da72" }, // 로컬 환경에서는 직접 API 호출에 필요한 키 전달
    });

    // 스토어에 articles 설정
    useNewsStore.getState().setArticles(response.data || []);
    console.log("데이터", response, "확인", response.data);

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    useNewsStore.getState().setArticles([]); // 오류 시 상태 초기화
  }
};

// 스토어 내보내기
export { GetNews, useNewsStore };
