import React, { useState, useEffect } from "react";
import { useNewsStore } from "../../../api/News"; // Zustand 스토어 임포트
import { GetNews } from "../../../api/News"; // GetNews 함수 임포트
import { ReactComponent as Rightcursor } from "../../../assets/health/rightcursor.svg";

const ShowNew = () => {
  const { articles, setArticles } = useNewsStore(); // 스토어에서 articles와 setArticles 가져오기
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await GetNews(); // GetNews 호출하여 데이터 가져오기
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // 의존성 배열에 빈 배열 추가

  console.log("articles", articles.data, "setArticles", setArticles);
  const newsData = articles.data || []; // articles.data가 없을 경우 빈 배열로 초기화
  return (
    <div className="health-news-container">
      {loading ? (
        <p>Loading...</p>
      ) : newsData.length > 0 ? (
        newsData.slice(0, 5).map((article) => (
          <div
            key={article.content_url}
            className="health-news-container-box"
            onClick={() => window.open(article.content_url, "_blank")}
          >
            <div className="health-news-title">
              {article.title || "No Title"}
            </div>
            <div className="health-news-content">
              {article.summary
                ? article.summary.length > 100
                  ? `${article.summary.slice(0, 100)}...`
                  : article.summary
                : "No Description"}
            </div>
            <div className="health-go-news">
              뉴스 보러가기 <Rightcursor />
            </div>
          </div>
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
};

export default ShowNew;
