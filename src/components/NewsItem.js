import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
          <div className="card" >
            <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2020-12/c8v0o0l8_vistara-airline_625x300_18_December_20.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%',zIndex:'1'}}>{source}</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted"></small>By {author} on {new Date(date).toGMTString()} </p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem