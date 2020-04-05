import React, { Component } from 'react'
class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            searchResults: ""
        }
    }
    componentDidMount = (params) => {
        let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(news => {
                this.setState({
                    articles: news.articles
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            searchResults: e.target.value
        })
    }

    // handleClick =(e)=>{
    //     this.setState({
    //         searchResults:e.target.value
    //     })
    // }
    render() {
        // let articleList = this.state.articles.map((article, index) => {
        //     return <li>
        //         <h4>{article.title}</h4>
        //         <br />
        //         <img src={article.urlToImage} height="150px" />
        //         <p>{article.description}</p>
        //     </li>
        // })
        // let newArray = Array.filter((obj) => {
        //     return true false
        // })
        let filteredList = this.state.articles.filter((article, index) => {
            return article.title.toLowerCase().includes(this.state.searchResults.toLowerCase())
        })
        let articleList = filteredList.map((article, index) => {
            return <li key ={index}>
                <h4>{article.title}</h4>
                <br />
                <img src={article.urlToImage} height="150px" />
                <p>{article.description}</p>
            </li>
        })
        return (
            <>
               <div> Search Results:{this.state.searchResults}<br /> </div>
               <div>
                <input type="text" onChange={this.handleChange} />
                {/* <button onClick ={this.handleClick}>Search</button> */}
                </div>
                <ul>
                    {articleList}
                </ul>
            </>
        )
    }
}
export default News