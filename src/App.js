import React, { useState } from 'react';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Components/header/header'
import Article from './Components/Article/Article'

function App() {
  const [searchValue, setSearchValue] = useState("")

  const getSearchValue = (e) => {
    setSearchValue(prev => prev = e.target.value)
  }
  const onSearch = (value) => {
    value = searchValue;
    console.log(value)
    fetch(`http://hn.algolia.com/api/v1/search?query=${value}`)
      .then(
        (response) => {
          // console.log(response);
          if (!response.ok)
            // Failed HTTP status
            throw new Error(
              `An error has occured during the request. HTTP status code: ${response.status}`
            );
          return response.json();
        },
        (error) => {
          console.log("Rejection error callback");
          console.log(error);
        }
      )
      .then((data) => {
        console.log(data);
        setSearchValue(prev => prev = "")
      })
      .catch((error) => {
        console.log("Catch block");
        console.log(error);
      });

  }
  return (
    <>
      <Header isValue={getSearchValue} onSearch={onSearch} value={searchValue} />
      <main>
        <div className="container">
          <ol className="article-list">
            <Article />
            <Article />

          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
