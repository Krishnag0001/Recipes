import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredents.model';
import { ShopingListServices } from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ngChangeSub!: Subscription;

  constructor(private shopingList: ShopingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.shopingList.getIngredients();
    this.ngChangeSub = this.shopingList.ingredientChange
    .subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    )
  }

  onEditItem(index: number){
    this.shopingList.editIngredient.next(index)
  }
  ngOnDestroy(): void {
    this.ngChangeSub.unsubscribe();
  }
  // onIngridentAdded(ingredients: Ingredient){
  //   this.ingredients.push(ingredients);
  // }

}
