// import logo from './logo.svg';
// import Recipe from './Recipe.js';import React from 'react';
import React, { Component } from 'react';
import Navbar from './Navbar.js';
import RecipeList from './RecipeList.js';
import RecipeInput from './RecipeInput.js';
import './RecipeApp.css';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
				{
					id: 0,
					title: 'Spaghetti',
					instructions:
						'Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce',
					ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
					img: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
				},
				{
					id: 1,
					title: 'Milkshake',
					instructions: 'Combine ice cream and milk.  Blend until creamy',
					ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
					img: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
				},
				{
					id: 2,
					title: 'Avocado Toast',
					instructions:
						'Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.',
					ingredients: [
						'2 slices of bread',
						'1 avocado',
						'1 tablespoon olive oil',
						'1 pinch of salt',
						'pepper'
					],
					img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
				}
			], nextRecipeId: 3, showForm: false
		}
		this.handleSave = this.handleSave.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}
	
	handleSave(recipe) {
		this.setState((prevState, props) => {
			const newRecipe = {...recipe, id: this.state.nextRecipeId};
			return {
				nextRecipeId: prevState.nextRecipeId + 1,
				recipes: [...this.state.recipes, newRecipe],
				showForm: false
			}
		})
	}
	
	onDelete(id) {
		const recipes = this.state.recipes.filter(r => r.id !== id);
		this.setState({recipes});
	}
	
	render() {
		const {showForm} = this.state;
		return (
		<div className="App">
			<Navbar onNewRecipe={() => this.setState({showForm: true})} />
			{ showForm ? <RecipeInput onSave={this.handleSave} onClose={() => this.setState({showForm: false})}/> : null}
			<RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
		</div>
		);
	}
}

export default RecipeApp;