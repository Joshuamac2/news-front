import React from "react";

import {Link} from "react-router-dom";

function NewsArticle({ data, id }) {

  return (

    <Link to={`/article?id=${id}`}>
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
    </Link>
  );
}

export default NewsArticle;
