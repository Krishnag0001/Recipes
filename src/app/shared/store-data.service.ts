import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class StoreDataService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-project-b6cbf-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.error(error)
      );
  }

  fetchData() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-project-b6cbf-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
