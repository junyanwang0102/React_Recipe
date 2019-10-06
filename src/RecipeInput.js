import React, { Component } from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
	
	static defaultProps = {
		onClose() {},
		onSave() {}
	}
	
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleNewIngredient = this.handleNewIngredient.bind(this);
		this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleNewIngredient(e) {
		const {ingredients} = this.state;
		this.setState({ingredients: [...ingredients, '']});
	}
	
	handleChangeIngredient(e) {
		const i = Number(e.target.name.split('-')[1]);
		const ingredients = this.state.ingredients.map((ingredient, index) => (
			i === index ? e.target.value : ingredient
		));
		this.setState({ingredients});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSave({...this.state});
		this.setState({
			title: '',
			instructions: '',
			ingredients: [''],
			img: ''
		})
	}
	
	render() {
		const {title, instructions, img, ingredients} = this.state;
		const {onClose} = this.props;
		let inputs = ingredients.map((element,index) => (
			<div key={`ingredient-${index}`} className="recipe-form-line">
				<label>{index+1}.
					<input type="text" name={`ingredient-${index}`} value={element} size={45} autoComplete="off" placeholder=" Ingredient" onChange={this.handleChangeIngredient}>
					</input>
				</label>
			</div>
		));
		
		return (
			<div className="recipe-form-container">
				<form className="recipe-form" onSubmit={this.handleSubmit}>
					<button className="close-button" type="button" onClick={onClose}>
						X
					</button>
					<div className="recipe-form-inline">
						<label htmlFor="recipe-title-input">Title</label>
						<input id="recipe-title-input" key="title" name="title" type="text" value={title} size={42} autoComplete="off" onChange={this.handleChange}>
						</input>
					</div>
					<label htmlFor="recipe-instructions-input" style={{marginTop: "5px"}}>Instructions</label>
					<textarea id="recipe-instructions-input" key="instructions" type="instructions" name="instructions" rows="8" cols="50" autoComplete="off" value={instructions} onChange={this.handleChange}>
					</textarea>
					{inputs}
					<button className="buttons" type="button" onClick={this.handleNewIngredient}>
						+
					</button>
					<div className="recipe-form-inline">
						<label htmlFor="recipe-img-input">Img Url</label>
						<input id="recipe-img-input" name="img" type="text" value={img} size={36} autoComplete="off" onChange={this.handleChange}>
						</input>
					</div>
					<button className="buttons" type="submit" style={{alignSelf: "flex-end", marginRight: 0}}>
						SAVE
					</button>
				</form>
			</div>
		)
	}
}

export default RecipeInput;