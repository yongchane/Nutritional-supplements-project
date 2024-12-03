import React from "react";
// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const RecordDetail = () => {
  const { item } = useParams();
  console.log(item);

  //   const { data, error, isLoading } = useQuery({
  //     queryKey: ["itemData", item],
  //     queryFn: () => fetch(`/api/data/${item}`).then((res) => res.json()),
  //     enabled: !!item,
  //   });

  //   if (isLoading) return <div>로딩 중...</div>;
  //   if (error) return <div>오류 발생: {error.message}</div>;

  return (
    <div>
      <h2>{item}</h2>
      {/* <p>{data.description}</p> */}
      {/* 추가적인 데이터 표시 */}
    </div>
  );
};

export default RecordDetail;
