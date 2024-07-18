import React from "react";

const NewsItem = (props) => {
  let { tittle, description, imageurl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card" style={{ width: "22rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            !imageurl
              ? "https://techcrunch.com/wp-content/uploads/2021/11/stalkerware-leaked-location-1.jpg?resize=1200,675"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author} on {new Date(date).toDateString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem
