import React, { useState } from 'react';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Components/header/header'
import Spinner from './Components/Spinner/Spinner'
import { Loader, Dimmer, Pagination } from 'semantic-ui-react'
import Error from './Components/Error/Error';

import Article from './Components/Article/Article'


function App() {
  const [searchValue, setSearchValue] = useState("")
  const [hackerContent, setHackerContent] = useState();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);
  const [isDisabledPagination, setIsDisabledPagination] = useState("disabled")
  const [numOfResults, setNumOfResults] = useState({ value: 10 })

  const onChangeRange = (e) => {
    setArticlesPerPage(e.target.value)
    // onSearch()
  }
  const onChangeSelect = (_, { value }) => {
    console.log({ value })
    setNumOfResults({ value })
    // onSearch()
  }
  const getSearchValue = (e) => {
    setSearchValue(prev => prev = e.target.value)
  }
  const onSearch = (value) => {
    value = searchValue;
    setIsLoading(true);
    setIsError(false)
    setArticles(prev => prev = [])
    const url = `http://hn.algolia.com/api/v1/search?query=${value}&hitsPerPage=${numOfResults.value}`
    console.log(url)
    fetch(url)
      .then((response) => {
        if (!response.ok)
          // Failed HTTP status
          throw new Error(
            `An error has occured during the request. HTTP status code: ${response.status}`
          );
        return response.json();
      },
        (error) => {
          console.log("Rejection error callback");
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        }
      )
      .then((data) => {
        setIsLoading(false);
        if (data.hits.length > 0) {
          setHackerContent(data);
          setArticles(data.hits)
          setIsDisabledPagination("")
        } else {
          setIsDisabledPagination("disabled")
          setIsError(true)
        }
      })
      .catch((error) => {
        console.log("Catch block");
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });


  }



  const handlePaginationChange = (_, { activePage }) => {
    setActivePage(activePage)
  }

  const indexOfLastArticle = activePage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticle = articles.slice(indexOfFirstArticle, indexOfLastArticle)
  const totalPages = 20;
  // if (isLoading) {
  //   return <MoonLoader color="black" loading={isLoading} size={50} />;
  // }

  return (
    <>

      <Header />

      <Header onChangeSelect={onChangeSelect} range={articlesPerPage} onChangeRange={onChangeRange} isLoading={isLoading} isValue={getSearchValue} onSearch={onSearch} value={searchValue} />
      <main>
        <div className="container">
          {/* {
            isLoading && <Dimmer active={isLoading}>
              <Loader inline='centered' active size='medium'>Loading</Loader>
            </Dimmer>
          } */}
          {isError && <Error />}
          <ol className="article-list">
            {

              /* if (isLoading) .. present loading-status  // TODO */

              currentArticle && currentArticle.map((content, i) => {
                return (
                  <Article
                    isLoading={isLoading}
                    key={i + 1}
                    id={(activePage - 1) * articlesPerPage + i + 1}
                    title={content.title || content.story_title}
                    link={content.url}
                    author={content.author}
                    points={content.points}
                    num_comments={content.num_comments}
                    time={content.created_at}>
                  </Article>
                )
              })
            }

          </ol>
          <Pagination className={isDisabledPagination} activePage={activePage} onPageChange={handlePaginationChange} totalPages={totalPages} />

          {/* {isLoading && } */}
        </div>
      </main>

    </>
  );
}

export default App;
