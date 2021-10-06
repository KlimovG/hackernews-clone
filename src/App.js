import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Components/header/header'
import Spinner from './Components/Spinner/Spinner'
import { Loader, Dimmer, Pagination, Button } from 'semantic-ui-react'
import Error from './Components/Error/Error';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


import Article from './Components/Article/Article'


function App() {
  const [searchValue, setSearchValue] = useState("")
  const [hackerContent, setHackerContent] = useState();
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);
  const [isDisabledPagination, setIsDisabledPagination] = useState("disabled")
  const [numOfResults, setNumOfResults] = useState({ value: 20 })
  const [totalOfPagination, setTotalOfPagination] = useState(Math.ceil(numOfResults.value / articlesPerPage))
  const [isComments, setIsComments] = useState(false)
  const [isCommentsLoading, setIsCommentsLoading] = useState(false)
  const [articleTitle, setArticleTitle] = useState()

  useEffect(() => {
    setTotalOfPagination(Math.ceil(numOfResults.value / articlesPerPage))
  }, [numOfResults, articlesPerPage])

  const luckyArray = ['php', 'jest', 'javascript', 'perl', 'react', 'angular', 'hacking', 'python', 'vue', 'jango', 'html and css', 'politics in it', 'frontend', 'backend', 'server', 'macos', 'windows', 'bootcamp']

  const luckyQuery = () => {
    const luckyNumber = Math.floor(Math.random() * luckyArray.length)
    const searchLuckyValue = luckyArray[luckyNumber]
    onSearch(searchLuckyValue)
  }
  useEffect(() => {
    luckyQuery()
    // console.log('hired')
  }, [])

  const onChangeRange = (e) => {
    setArticlesPerPage(e.target.value)
  }
  const onChangeSelect = (_, { value }) => {
    // console.log({ value })
    setNumOfResults({ value })
  }
  const getSearchValue = (e) => {
    setSearchValue(prev => prev = e.target.value)
  }
  const onSearch = (value) => {
    if (value === undefined) {
      value = searchValue;
    }
    setIsComments(false)
    setIsLoading(true);
    setIsError(false)
    setArticles(prev => prev = [])
    const url = new URL("https://hn.algolia.com/api/v1/search?");

    const parameters = {
      query: value,
      hitsPerPage: numOfResults.value
    };
    url.search = new URLSearchParams(parameters);

    // console.log(`URL: ${url}`);

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


  const getComments = (id) => {
    const url = `https://hn.algolia.com/api/v1/items/${id}`;
    setIsCommentsLoading(true)
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
          setIsCommentsLoading(false)
          console.log(error);
        }
      )
      .then((data) => {
        setIsLoading(false);
        if (data) {
          setComments(data.children);
          setIsComments(true)
          setIsCommentsLoading(false)
          // console.log(comments)
          // createComments(comments)
        } else {
          console.log('No comments detected')
        }
      })
      .catch((error) => {
        console.log("Catch block");
        setIsLoading(false);
        setIsCommentsLoading(false)
        setIsError(true);
        console.log(error);
      });
  }
  const TextOfComment = (props) => {
    const html = props.text;

    return (
      // <div ></div>
      ReactHtmlParser(html)
    )
  }
  const Comment = ({ text, children, id }) => {
    const hasChildren = children && (children.length > 0)
    return (
      <li className="comment__item">
        <p>
          <TextOfComment text={text} />
        </p>
        {hasChildren && children.map((item) => (
          <ul className="comment__list-child">
            <Comment key={item.id} {...item} />
          </ul>
        ))}
      </li>
    )
  }

  const getArticleTitle = (value) => {
    setArticleTitle(value)
  }


  return (
    <>
      <Header luckyQuery={luckyQuery} onChangeSelect={onChangeSelect} range={articlesPerPage} onChangeRange={onChangeRange} isLoading={isLoading} isValue={getSearchValue} onSearch={onSearch} value={searchValue} />
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
                    key={content.objectID}
                    itemID={content.objectID}
                    id={(activePage - 1) * articlesPerPage + i + 1}
                    title={content.title || content.story_title}
                    link={content.url}
                    author={content.author}
                    points={content.points}
                    num_comments={content.num_comments}
                    time={content.created_at}
                    getComments={getComments}
                    getID={getArticleTitle}
                    isCommentsLoading={isCommentsLoading}
                    isComments={isComments}
                  >
                  </Article>
                )
              })
            }

          </ol>
          {!isError && totalOfPagination > 1 && <Pagination className={isDisabledPagination} activePage={activePage} onPageChange={handlePaginationChange} totalPages={totalOfPagination} />}
          {isComments &&
            <div className="comment" id="commentsContainer">
              <h2 className="comment__title">Comments for Article: <em>"{articleTitle}"</em></h2>
              <ul className="comment__list-parent">
                {comments && comments.map(item => <Comment key={item.id}  {...item} />)}

              </ul>

            </div>}
        </div>
      </main>

    </>
  );
}

export default App;
