import React from 'react'
import styles from './storer.module.css'
var localStorageKey = '_dugurlu_recipes';

// write and read with local storage
// localStorage.setItem(localStorageKey, JSON.stringify(this.state))
// localStorage.getItem(localStorageKey)

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  editRecipe(index, name, ingredients) {
    this.props.showDialog(name, ingredients, index);
  }

  handleEdit() {
    this.props.updateRecipe(1, 'foo', ['bar']);
  }
  handleDelete(event, index) {
    this.props.deleteRecipe(event, index);
  }

  render() {
    var collapseId = 'collapse' + this.props.name;
    collapseId = collapseId.replace(" ", "");

    return (
      <article>
        <div className="panel panel-default">
          <div className="panel-heading">
            <a href={'#' + collapseId} data-toggle='collapse' data-target={'#'+collapseId}>
              <h4 className="panel-title">
                {this.props.name}
              </h4>
            </a>
          </div>
          <div id={collapseId} className="panel-collapse collapse">
            <ul className="list-group">
              {this.props.ingredients.map(function(el){
                return (<li className="list-group-item">{el}</li>)
              })}
            </ul>
            <button className="btn btn-danger" 
              id={"delete" + this.props.index}
              onClick={this.handleDelete.bind(this, this.props.index)}>Delete</button>
            <button className="btn btn-primary"
              onClick={this.editRecipe.bind(this, this.props.index, this.props.name, this.props.ingredients)}>Edit</button>
          </div>
        </div>
      </article>
    );
  }
}

class RecipeBox extends React.Component {
  constructor() {
    super();
    var recipes = JSON.parse(localStorage.getItem(localStorageKey)) || [{
      name: 'Pumpkin Pie',
      ingredients: ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']
    }, {
      name: 'Spaghetti',
      ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']
    }, {
      name: 'Onion Soup',
      ingredients: ['Onions', 'Water']
    }];
    this.state = {
      recipes: recipes,
      editing: false,
      editIndex: -1
    };
  }

  deleteChildRecipe(index) {
    this.setState({
      recipes: this.state.recipes.filter((_, i) => i !== index)
    });
    localStorage.setItem(localStorageKey, JSON.stringify(this.state.recipes));
  }

  render() {
    var recipeElements = [];
    for (var i = 0; i < this.state.recipes.length; i++) {
      recipeElements.push(
        <Recipe name={this.state.recipes[i].name}
          ingredients={this.state.recipes[i].ingredients} index={i}
          deleteRecipe={this.deleteChildRecipe.bind(this)}
          showDialog={this.showDialog.bind(this)}
        />);
    }
    return (
      <div className="container">
        {recipeElements}
        <button className="btn btn-default" type="button" onClick={this.showDialog.bind(this)}>
          Add Recipe
        </button>
        
        <dialog>
          <button className="close" type="button" aria-label="Close" onClick={this.closeDialog.bind(this)}><span aria-hidden="true">&times;</span></button>
          <div className="input-group">
            <label for="recipeName">Recipe Name</label>
            <input className="form-control" type="text" placeholder="Recipe" id="recipeName" autofocus />
          </div>
          <div className="input-group">
            <label for="recipeIngredients">Ingredients</label>
            <textarea className="form-control" rows="2" placeholder="Ingredients, separated by commas" id="recipeIngredients" ></textarea>
          </div>
          <button className="btn btn-default" type="button" onClick={this.handleEvent.bind(this)}>Save</button>
          <button className="btn btn-danger" type="button" onClick={this.closeDialog.bind(this)}>Cancel</button>
        </dialog>
      </div>
    );
  }

  handleEvent(event) {
    var rName = document.getElementById('recipeName').value;
    var rIngredients = document.getElementById('recipeIngredients').value.replace(" ", "").trim().split(",");
    const newRecipe = {
      name: rName,
      ingredients: rIngredients
    };
    const newState = this.state;
    
    // new recipe or edit of existing?
    if(this.state.editing) {
      const newRecipes = newState.recipes;
      newRecipes.splice(this.state.editIndex, 1, newRecipe);
    } else {
      newState.recipes.push(newRecipe);
    }
    
    this.setState(newState);
    localStorage.setItem(localStorageKey, JSON.stringify(this.state.recipes));
    this.closeDialog();
  }

  showDialog(name, ingredients, index) {
    var dialog = document.querySelector('dialog');
    if(ingredients) {    document.getElementById('recipeIngredients').value = ingredients.join(', ');}
    if(name && !name.target) {    document.getElementById('recipeName').value = name;}
    if(index) {
      const newState = this.state;
      newState.editing = true;
      newState.editIndex = index;
      this.setState(newState);
    }
    dialog.showModal();
    document.getElementById('recipeName').focus();
  }
  closeDialog() {
    const newState = this.state;
    newState.editing = false;
    newState.editIndex = -1;
    this.setState(newState);
    document.getElementById('recipeIngredients').value = "";
    document.getElementById('recipeName').value = "";
    var dialog = document.querySelector('dialog');
    dialog.close();
  }
}

ReactDOM.render(<RecipeBox />, app);