import { Component, OnInit } from '@angular/core';

// import { RecipeService } from './recipe.service';
// import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // asigned recipe data to selectedRecipe
  // selectedRecipe!: Recipe;

  constructor() { }

  ngOnInit(): void {

    // this.recipeService.recipeSelected
    // .subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // )
  }

}
