import React, {Component} from "react"
import {connect} from 'react-redux'

class Article extends Component{

  render(){
  const {article, toggleOpen, cssColor} = this.props
  const title = cssColor ? "ArticleTitle" : "ArticleTitleOn"

  return(
  <div>
    <article className="bg-article">
      <div className="container p-0">
        <div className="row p-0 justify-content-md-center">
        <div className="col-md-10 col-12">
           <button onClick = {toggleOpen} className={title}>
            <p>{article.title}</p>
          </button>
          {this.getBody()}
        </div>
        </div>
      </div>
    </article>
  </div>
  )}

  getBody(){
    const {isOpen, article} = this.props

    if (!isOpen) return null
    return(
      <section className="bg-section">
        <div className="Aricle-location"><p>{article.location}</p></div>
        <div className="Article-text"><p>{article.text}</p></div>
        <div className="Article-member"><p>{article.members}</p></div>
      </section>
    )

  }
}

export default connect()(Article)
