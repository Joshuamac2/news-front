import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="all__news">
      <h1>The News Lab</h1>
      <div className="row mt-4">
         {data
          ? data.articles.slice(0, 10).map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
