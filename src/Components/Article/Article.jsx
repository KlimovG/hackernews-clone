import React from "react";
import './article.css'

const Article = (props) => {
  const timeDifference = () => {
    const timeCreation = props.created_at;
    const currentTime = new Date()

    console.log(timeCreation)
  }
  return (
    <li className="article">
      <div className="row article__row-1">
        <h3 className="article__title">{props.title}</h3>
        <a href={props.link} className="article__link">{props.link}</a>
      </div>
      <div className="row article__row-2">
        <span className="article__comments">{props.num_comments}</span>
      </div>
    </li>
  )
}

export default Article;