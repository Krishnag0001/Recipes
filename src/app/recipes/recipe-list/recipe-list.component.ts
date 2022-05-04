import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes!: Recipe[];
  subscription!: Subscription;

  constructor( private recipeService : RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChage
    .subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes;
      }
    )
  this.recipes= this.recipeService.getRecipes();

}

onNewRecipe(){
this.router.navigate(['new'], {relativeTo: this.route })
}
  // Here recipe is a referance variable of recipes
  // And then custom event will triggered and gettig data from item componant



  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
