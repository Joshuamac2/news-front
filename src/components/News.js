import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

const right = ["Sky.com", "Daily Mail"];
const left = ['The Guardian', 'BBC News'];

function News(props) {
  const { data } = useContext(NewsContext);

  return (

    <div className="all__news">
      <div className="right">
         {data
          ? data.articles.filter(wing => left.includes(wing.source.name)).slice(0, 10).map((news, index) => (
              <NewsArticle data={news} key={news.url} id={index} />
            ))
          : "Loading"}
      </div>
      <div className="left">
         {data
          ? data.articles.filter(wing => right.includes(wing.source.name)).slice(0, 10).map((news, index) => (
              <NewsArticle data={news} key={news.url} id={index} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}
export default News;
