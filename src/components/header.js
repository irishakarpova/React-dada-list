import React, {Component} from "react"
import SelectFilter from './select'
import AddArticle from './addArticle'
import toggleDecorator from '../decorators/toggleDecorator'
import logo from '../logo.svg'
import searchSign from '../search-sign.svg'


class Header extends Component{

  state={
    opacity: 1,
    transformL: 'rotate(0deg)',
    transformR: 'rotate(0deg)',
    padding:'0 10px 0 30px'
  }

  toggleSearchBtn=()=>{
    this.setState({
      opacity: this.state.opacity === 0 ? 1 : 0,
      padding: this.state.padding === '0 10px 0 30px' ? '0 10px 0 55px' : '0 10px 0 30px',
      transformL: this.state.transformL === 'rotate(0deg)' ? 'rotate(-45deg)': 'rotate(0deg)',
      transformR: this.state.transformR === 'rotate(0deg)' ? 'rotate(45deg)': 'rotate(0deg)'
    })
  }

  render(){

  const styles = {
    transition: 'all .3s ease-out'
  }

  const {handleClick} = this.props

  const searchSign_btn =
    <button className="searchBtn" onClick={ this.toggleSearchBtn }
            style={{padding:this.state.padding, ...styles}}
      >
      <div style={{transform:this.state.transformL, ...styles}} className="devL"></div>
      <div style={{transform:this.state.transformR, ...styles}} className="devR"></div>
      <div style={{opacity:this.state.opacity, ...styles}}>
        <img src={searchSign} className='searchSign'  alt="search-sign" />
      </div>
    </button>

  return(
    <div>
      <header>
        <div className="container-fluid Bg-container_dark p-0">
          <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-3 Bg-logo">
                  <img src={logo} className='App-logo' alt="logo" />
                </div>
                <div className="col-md-7 d-none d-md-block p-0">
                  <div className="Title">
                    <h1>FOR THE VOICE</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="container-fluid  bg-sub-title">
          <div className="container">
            <div className="row justify-content-center d-flex flex-row">
              <div className="col-md-3 p-0">
                <div className="Logo-years">
                  <p>1910-1920</p>
                </div>
              </div>
              <div className="col-8 d-block d-md-none p-0">
                <div className="Title-sm">
                  <h1>FOR THE VOICE</h1>
                </div>
              </div>
              <div className="col-md-7 col-4 p-0">
                <div className="Sub-title">
                  <h2>AVANGARD RUSSIAN BOOK</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid Bg-container_dark section-book-cont p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-10 Section-book">
                <h3>ASSOCIATIONS, GROUPS AND PUBLISHING HOUSES</h3>
              </div>
              <div onClick={handleClick} className="col-md-1 p-0 col-2 Search-btn">
                {searchSign_btn}
              </div>
            </div>
          </div>
            {this.SearchComp}
        </div>
      </header>
    </div>
  )
  }

  get SearchComp(){
    if (!this.props.isOpen) return null
    return (
      <div>
		<AddArticle/>
        <SelectFilter/>
      </div>
    )
  }
}
export default toggleDecorator(Header)
