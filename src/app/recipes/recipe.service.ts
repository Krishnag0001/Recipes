import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredents.model';
import { ShopingListServices } from '../shoping-list/shoping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

// recipeSelected= new EventEmitter<Recipe>();
recipeChage = new Subject<Recipe[]>()

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Cheese Burger',
  //     'What items you want else?',
  //     'https://images.all-free-download.com/images/graphicwebp/bacon_bread_breakfast_burger_cake_cheeseburger_599680.webp',
  //  [
  //    new Ingredient('Meat', 100),
  //    new Ingredient('French Fries', 10)
  //  ]),

  //   new Recipe(
  //     'Big Burger',
  //     'Burger',
  //     'https://images.all-free-download.com/images/graphicwebp/bacon_bread_breakfast_burger_cake_cheeseburger_599680.webp',
  //     [
  //       new Ingredient('Chicken', 55),
  //       new Ingredient('Buns', 25)
  //     ]
  //   ),
  //   new Recipe(
  //     'Paneer Burger ',
  //     'Just Eat Something New',
  //     'https://images.all-free-download.com/images/graphicwebp/bacon_bread_breakfast_burger_cake_cheeseburger_599680.webp',
  //     [
  //       new Ingredient('Paneer', 65),
  //       new Ingredient('Chesse', 50)
  //     ]),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shopingList: ShopingListServices){}

  setRecipes(recipes: Recipe[]){
     this.recipes = recipes;
     this.recipeChage.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShopingList(ingredents: Ingredient[]){
    this.shopingList.addIngredients(ingredents);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChage.next(this.recipes.slice())
  }

updateRecipe(index: number, newRecipe: Recipe ){
  this.recipes[index] = newRecipe;
  this.recipeChage.next(this.recipes.slice())

}
deleteRecipe(index: number){
  this.recipes.splice(index, 1);
  this.recipeChage.next(this.recipes.slice())
}
}
