import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe(
      'Testy Schnitzel',
      'A super-testy Xhhnitzal - just awesome!',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
      [
        new Ingredient('Salmon', 1),
        new  Ingredient('Lemon', 1)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://s-media-cache-ak0.pinimg.com/originals/da/55/e3/da55e32da25738ecde20582ec6416a2f.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Bacon', 5)
      ])
  ];

  getRecipes() {
    return this.recipes.slice()
  }
}
