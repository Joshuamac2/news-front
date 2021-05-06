import React, { useContext } from "react";

import { NewsContext } from "../NewsContext";

import ArticleApp from "./ArticleApp";

 const Article = () => {
   const {data} = useContext(NewsContext);
   const id = window?.location?.search?.replace('?id=', "")
     return (
       <div>
         <h1> Article </h1>
         {data
           ? (<div>
                <h1>{data.articles[id].title}</h1>
                <a href={data.articles[id].url}>{data.articles[id].url}</a>
             </div>)
           :'loading'}
           <ArticleApp />
       </div>
     );
 }

 export default Article;
