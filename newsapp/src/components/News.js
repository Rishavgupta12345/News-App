import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capitaliseFirst(props.category)} - News App`;

  const capitaliseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7bc2d435380d481e972e7684235ba810&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=7bc2d435380d481e972e7684235ba810&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        News App - Top {capitaliseFirst(props.category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length != totalResults}
      />

      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                tittle={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageurl={element.urlToImage}
                newsUrl={element.url}
                author={!element.author ? "unknown" : element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
