import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InfiniteScroll from "react-infinite-scroll-component";

function makeItem(article) {
  return (
    <Grid item xs={4} sm={4} md={4} key={article.url}>
      <Newsitem
        // key={article.url}
        title={article.title}
        content={article.description}
        img={article.urlToImage}
      ></Newsitem>
    </Grid>
  );
}

function News() {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const dataRaw = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=0bf453e8025a4e658f0fc7625ce7d653&pageSize=12&page=` +
          currentPage
      );
      const data = await dataRaw.json();

      setMaxPages(Math.ceil(data.totalResults / 12));
      setApiData(apiData.concat(data.articles));
    } catch {
      console.log("Error fetching data");
    }
  };

  function fetchDataScroll() {
    setCurrentPage(currentPage + 1);
    fetchData();
  }

  return (
    <div>
      <>
        <InfiniteScroll
          dataLength={apiData.length * maxPages} //This is important field to render the next data
          next={fetchDataScroll}
          hasMore={!(currentPage === maxPages)}
          loader={
            <Box display="flex" justifyContent="center">
              <Spinner />
            </Box>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {apiData.map(makeItem)}
          </Grid>
        </InfiniteScroll>
      </>
    </div>
  );
}

export default News;
