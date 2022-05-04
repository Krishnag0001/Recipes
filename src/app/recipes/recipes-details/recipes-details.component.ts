import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
// lets a parent component update data in the child component. Conversely,
// @Input() recipe!: Recipe;
recipe!: Recipe;
id!: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onEditRecipe(){
this.router.navigate(['edit'], {relativeTo: this.route})
// this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onAddToShopingList(){
    this.recipeService.addIngredientToShopingList(this.recipe.ingredients)
  }

  onRecipeDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['./recipes'])
  }
}
