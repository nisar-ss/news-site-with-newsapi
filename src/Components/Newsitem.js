import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className="card my-2">
            <img src={imageUrl} alt='' className="card-img-top" />
            <div className="card-body" style={{ backgroundColor: 'rgb(160 176 188)' }}>
                <h5><span className='badge text-bg-success'>{source}</span></h5>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'> <small className='text-muted'> By {!author ? "Unknown" : author}, {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Newsitem
