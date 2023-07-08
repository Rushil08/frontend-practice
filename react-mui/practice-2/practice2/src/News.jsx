import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
  const [loading, setLoading] = useState(1);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(1);
        const dataRaw = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=0bf453e8025a4e658f0fc7625ce7d653&pageSize=12&page=` +
            currentPage
        );

        const data = await dataRaw.json();
        setLoading(0);
        setMaxPages(Math.ceil(data.totalResults / 12));
        setApiData(data.articles);
      } catch {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, [currentPage]);
  return (
    <div>
      {loading ? (
        <Box display="flex" justifyContent="center">
          <Spinner></Spinner>
        </Box>
      ) : (
        <>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {apiData.map(makeItem)}
          </Grid>
          <Grid container justifyContent="space-between">
            <Button
              variant="contained"
              onClick={prevPage}
              disabled={currentPage === 1 ? 1 : 0}
              sx={{ my: 2 }}
            >
              {" "}
              Prev Page
            </Button>
            <Button
              variant="contained"
              onClick={nextPage}
              disabled={currentPage === maxPages ? 1 : 0}
              sx={{ my: 2 }}
            >
              Next Page
            </Button>
          </Grid>
        </>
      )}
    </div>
  );
}

export default News;
