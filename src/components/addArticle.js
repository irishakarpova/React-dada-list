import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addArticle} from '../ac'

class AddArticle extends Component{
	
	state={
		title: '',
		text: ''
	}

	render(){
		return(
			
			<form onSubmit={this.handleSubmit}>
				<label>Title:</label>
				<input 
					value={this.state.title}
					onChange={this.handleChange('title')}
				/>
				<label>Text:</label>
				<input 
					value={this.state.text}
					onChange={this.handleChange('text')}
				/>
				<input type='submit' value='submit'/>
			</form>
		
		)
	}
	handleSubmit = (ev) => {
		console.log(this.state)
		ev.preventDefault()
		this.props.addArticle(this.state)
		this.setState({
			title: '',
			text: ''
		})
	}
	
  	isValidForm = () => ['user', 'text'].every(this.isValidField)

	isValidField = (type) => this.state[type].length >= limits[type].min

	handleChange = (type) => (ev) =>{
		const {value} = ev.target
		if(value.length>limits[type].max) return
		this.setState({
			[type]: value
		})
	}
}
const limits =  {
	title: { min:2, max:20},
	text: { min:2, max:20}
}

export default connect(null, (dispatch, ownProps) => ({
	addArticle: (comment) => dispatch(addArticle(comment, ownProps.articleId))
}))(AddArticle)	
	
	
	
