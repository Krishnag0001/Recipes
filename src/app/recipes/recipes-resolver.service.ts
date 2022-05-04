import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { StoreDataService } from "../shared/store-data.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable ({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{

constructor ( private storeDataService: StoreDataService, private recipeService: RecipeService){}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
 const recipes = this.recipeService.getRecipes();

  if (recipes.length === 0){
    return this.storeDataService.fetchData();
  } else
  return recipes;
}
}
