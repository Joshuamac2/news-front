import React from "react";

const getColor = (wing) => {
    if (wing === "CNN") return 'red';
    if (wing === "BBC News") return 'blue';
    return '';
};

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span style={{ color: getColor(data.source.name) }} className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
