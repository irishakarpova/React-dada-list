import React, { Component } from 'react'
import Article from './article'
import { connect } from 'react-redux'
import accordion from "../decorators/accordion"
import { filtratedArticlesSelector } from '../selectors'
import EventListener, { withOptions } from 'react-event-listener'


class InfinityList extends Component {

  state = {
    showItems: 25
  }

  handleScroll = () => {
    const timer = setTimeout(() => {
      this.setState({
        showItems: this.state.showItems  + 1
      });
    }, 1000)
      return () => clearTimeout(timer)
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props
    const getItems = articles.slice(0,this.state.showItems).map((article, key) =>{
      return (
        <li className="article-list-li" key={ article.id}>
          <Article
            article={ article }
            isOpen = {openItemId === article.id}
            toggleOpen = {toggleOpenItem(article.id)}
            cssColor= {openItemId === article.id}
          />
        </li>
      )
    })

    return (
      <div>
        <EventListener
          target="window"
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})}
        />
        <ul className="article-list article-list-bg">
          {getItems}
        </ul>
        <EventListener target={document}/>
      </div>
    )
  }
}

export default connect((state) => {

  return {articles: filtratedArticlesSelector(state),
  }

})(accordion(InfinityList))
