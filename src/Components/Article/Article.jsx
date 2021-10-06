import React, { useEffect, useState } from "react";
import './article.css'
import { Loader, Dimmer } from 'semantic-ui-react'


const Article = (props) => {
  const [createTime, setCreateTime] = useState("")

  // calculate days
  const timeCalculation = (time) => {
    // const timeCreation = new Date(`${props.time}`).getTime();
    const timeCreation = new Date(time).getTime()
    const timeCurrent = new Date().getTime()
    const timeDifference = (timeCurrent - timeCreation) / 1000
    const days = Math.floor(timeDifference / 86400);
    const years = Math.floor(days / 365.25)

    // calculate hours
    const hours = Math.floor(timeDifference / 3600) % 24;


    // calculate minutes
    const minutes = Math.floor(timeDifference / 60) % 60;

    if (years >= 1 && years < 2) {
      return `1 year ago`
    } else if (years >= 2) {
      return `${years} years ago`
    } else if (years < 1 && hours >= 24) {
      return `${days} days ago`
    } else if (hours < 24 && hours >= 1) {
      return `${hours} hours ago`
    } else if (hours < 1) {
      return `${minutes} minutes ago`
    }
  }

  useEffect(() => {
    setCreateTime(prev => prev = timeCalculation(props.time))
  }, [])
  // timeCalculation(createTime)

  return (
    <li className="article">
      <span className="article__id">{props.id}.</span>
      <div className="row article__row-1">
        <h3 className="article__title">{props.title}</h3>
        <a href={props.link} className="article__link">link</a>
      </div>
      <div className="row article__row-2">
        <span className="article__info">{props.points} points by {props.author} {createTime}</span>
        <button onClick={() => {
          props.getComments(props.itemID);
          props.getID(props.title)
        }} className="article__comments">{props.num_comments} comments</button>

      </div>
    </li>
  )
}

export default Article;