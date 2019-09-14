import React, { Component } from 'react'
import ToggleCreate from './toggleCreate'
import ToggleSelect from './toggleSelect'
import styles from './buttons.modules.css'
import globalStyles from 'bootstrap/dist/css/bootstrap.module.css'
import classLister from 'css-module-class-lister'

const classes = classLister(styles, globalStyles)


class Menu extends Component{

	state={
		openedIndex: null
	}

	handleClick = (index) => {
		this.setState({
			openedIndex: this.state.openedIndex === index ? null: index
		})
	}

	render(){

	const addI = this.state.openedIndex === 0 ||
		  this.state.openedIndex === null  ?

		  <div className
				={classes("btn-toggle-open-select")} onClick={this.props.handleOpenSelect}>
			  <ToggleSelect/>
		  </div>: null

	const selectI = this.state.openedIndex === 1 ||
		  this.state.openedIndex ===  null ?

		  <div className={classes("btn-toggle-open-create")} onClick={this.props.handleOpenAdd} >
		  	<ToggleCreate/>
		  </div> : null

	const menuItems = [ addI, selectI ]

	const inMenu  = menuItems.map((item, index)=> {
		return(
				<li key={index} className={classes('p-0 col-md-4 col-5 m-1')}
					onClick={()=>{this.handleClick(index)}}>
						{item}
				</li>
		)}
	)

	return(
		<ul className={classes("col-md-12 d-flex justify-content-end flex-row m-0 p-0")}>
			{inMenu}
		</ul>
	)}
}

export default Menu
