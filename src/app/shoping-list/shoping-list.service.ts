// import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredents.model";

export class ShopingListServices{
  // ingredientChange = new EventEmitter<Ingredient[]>()
  // for cross componant communication through a serviece we use Subject Observable Instead of EventEmitter
  ingredientChange = new Subject<Ingredient[]>();
  editIngredient = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    // for(let ingredent of ingredents){
    //   this.addIngredient(ingredent)
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredients(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChange.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index, 1);
      this.ingredientChange.next(this.ingredients.slice());
    }
}
