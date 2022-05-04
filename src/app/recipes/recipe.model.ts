import { Ingredient } from "../shared/ingredents.model";

export class Recipe{
   public name: string ;
   public discription: string ;
   public imagePath: string;
   public ingredients: Ingredient[];


constructor (name:string, desc: string, imagePath: string, ingredients: Ingredient[]){
    this.name = name;
    this.discription= desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;

}
}
