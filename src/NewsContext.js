import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;


  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bbc&from=2021-02-22&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
