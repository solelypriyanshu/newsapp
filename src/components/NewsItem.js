import React from 'react'

const NewsItem =(props)=> {

    let {title, description, imageURL, newsURL, author, date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">
            <div style={{display:`flex`, justifyContent:`flex-end`,position:`absolute`,right:`0`}}>
            <span className="badge rounded-pill bg-danger" >{source}</span>
            </div>
            <img src={imageURL?imageURL:"https://media.istockphoto.com/id/586383746/photo/beautiful-young-businesswoman-with-crossed-hands-showing-stop-gesture.jpg?s=612x612&w=0&k=20&c=tlRdUPet3y_5fP2cp7V9393uj4KMSpe7TQ2IgBazWOA="} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className='text-muted'/>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                <a rel="noreferrer"href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem
