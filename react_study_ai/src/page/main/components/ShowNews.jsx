import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowNew = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?q=health&apiKey=e6a9b70aea5a4dd1b265f13208bebe74"
        );
        console.log("Full response:", response.data); // 전체 응답 확인
        setArticles(response.data.articles || []); // 응답이 없으면 빈 배열로 설정
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="health-news-container">
      {loading ? (
        <p>Loading...</p>
      ) : articles.length > 0 ? (
        articles.slice(0, 5).map((article) => (
          <div
            key={article.url}
            className="health-news-container-box"
            onClick={() => window.open(article.url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <div className="health-news-title">
              {article.title || "No Title"}
            </div>
            <div className="health-news-content">
              {article.description
                ? article.description.length > 100
                  ? `${article.description.slice(0, 100)}...`
                  : article.description
                : "No Description"}
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
