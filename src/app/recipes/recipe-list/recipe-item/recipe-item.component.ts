import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // getting values / data from Recipe Model
 @Input() recipe!: Recipe;
 @Input() index!: number;

 // passing data through custom componant
//  @Output() recipeSelected = new EventEmitter<void>();

  // constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  // onSelected(){
    // this.recipeSelected.emit();
// this.recipeService.recipeSelected.emit(this.recipe)
  // }
}
