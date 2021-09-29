import React, { useState } from 'react';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Components/header/header'
import Spinner from './Components/Spinner'

// import TestOutput from './TestOutput';
import MoonLoader from "react-spinners/MoonLoader";
import Article from './Components/Article/Article'


function App() {
  const [searchValue, setSearchValue] = useState("")
  const [hackerContent, setHackerContent] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getSearchValue = (e) => {
    setSearchValue(prev => prev = e.target.value)
  }
  const onSearch = (value) => {
    value = searchValue;
    setIsLoading(true);
    console.log(value)
    fetch(`http://hn.algolia.com/api/v1/search?query=${value}`)
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
        setHackerContent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Catch block");
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });

  }

  // if (isLoading) {
  //   return <MoonLoader color="black" loading={isLoading} size={50} />;
  // }

  return (
    <>

      <Header />

      <Header isValue={getSearchValue} onSearch={onSearch} value={searchValue} />
      <main>
        <div className="container">
          {
            isLoading && <Spinner />
          }
          <ol className="article-list">
            {
              hackerContent && hackerContent.hits.map((content) => {
                return (
                  <Article title={content.title} link={content.url} author={content.author} points={content.points} num_comments={content.num_comments}>
                  </Article>
                )
              })
            }

          </ol>
        </div>
      </main>

    </>
  );
}

export default App;
