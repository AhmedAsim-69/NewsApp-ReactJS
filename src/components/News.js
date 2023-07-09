import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News - Top Headlines</h2>
        <div className="container"></div>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="My Title" description="myDesc"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="My Title" description="myDesc"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="My Title" description="myDesc"/>
            </div>
        </div>
      </div>
    )
  }
}
