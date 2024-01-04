import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(5);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseddata = await data.json();
        props.setProgress(70);
        setArticles(parseddata.articles);
        setLoading(true);
        setTotalResults(parseddata.totalResults)
        //yet not set
        props.setProgress(100)
    }
    document.title = `News1 - ${capitalize(props.category)}`

    useEffect(() => {
        updateNews();
    }, [])

    // const handleClickPrev = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }

    // const handleClickNext = async () => {
    //     if (setPage(page + 1) > Math.ceil(totalResults / props.pageSize)) {

    //     } else {
    //         setPage(page + 1)
    //         updateNews();
    //     }
    // }

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseddata = await data.json();
        setArticles(articles.concat(parseddata.articles));
        setTotalResults(parseddata.totalResults);
        setLoading(false)
    }

    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IysA09o0or88UDbJVFypj_LgJz3Ft2fqXw&usqp=CAU"

    return (
        <div className='container'>
            <h3 className='d-flex justify-content-center text-light' style={{ margin: '25px 0px', marginTop: '70px' }}>Top headlines - {capitalize(props.category)}</h3>
            {/* {loading && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}

            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <Newsitem title={element.title} imageUrl={!element.urlToImage ? defaultImg : element.urlToImage}
                                    description={element.description ? element.description.slice(0, 60) : ""}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}>
                                </Newsitem>
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
