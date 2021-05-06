import React, { useContext } from "react";

import { NewsContext } from "../NewsContext";
import ArticleApp from "./ArticleApp";

 const Article = () => {
   const {data} = useContext(NewsContext);
   const id = window?.location?.search?.replace('?id=', "")

     return (
       <div>
         {data
           ? ( <div className="newsArticle">
              <h1 className="news__title">{data.articles[id].title}</h1>
              <p className="news__desc">{data.articles[id].description}</p>
              <span className="news__author">{data.articles[id].author}</span> <br />
              <span className="news__published">{data.articles[id].publishedAt}</span>
              <span className="news__source">{data.articles[id].source.name}</span>
            </div>)
           :'loading'}
           <ArticleApp />
       </div>
     );
 }

 export default Article;
