import React, { Component } from 'react';
import Recipe from './Recipe.js';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		onDelete: PropTypes.func.isRequired
	};

	render() {
		const {onDelete} = this.props;
		const recipes = this.props.recipes.map((element,index)=>(
			<Recipe key={element.id} {...element} onDelete={onDelete} />
		));
		return (
			<div className="recipe-list">
			  {recipes}
		    </div>
		);
	}
}

export default RecipeList;