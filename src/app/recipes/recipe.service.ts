import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg')
  ];

  getRecipes() {
    return this.recipes.slice()
  }
}
