import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instructions: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		onDelete: PropTypes.func.isRequired
	}
	
	render() {
		// 简化版: const title = this.props.title;
		const {title, img, instructions, id, onDelete} = this.props;
		const ingredients = this.props.ingredients.map((element, index)=>(
			<li key={index}>{element}</li>
		));
		return (
			<div className="recipe-card">
				<div className="recipe-card-img">
					<img src={img} alt={title}></img>
				</div>
				<div className="recipe-card-content">
					<h3 className="recipe-card-title">{title}</h3>
					<h4>Ingredients:</h4>
					<ul>
						{ingredients}
					</ul>
					<h4>Instructions:</h4>
					<p>{instructions}</p>
					<button type="button" onClick={() => onDelete(id)}>DELETE</button>
				</div>
			</div>
		);
	}
}

export default Recipe;