import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: "recipes", loadChildren: () => import("./recipes/recipes.module").then(module => module.RecipesModule)},
  {
    path: "shoping-list", loadChildren: () => import("./shoping-list/shoping-list.module").then(module => module.ShopingListModule)},
  
    {
    path: "auth", loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule)}
    
    // ,
    // {
    //   path: 'shoping-list', loadChildren: () => import("./shoping-list/shoping-list.module").then(m => m.ShopingListModule)
    // },
  // Old Proccess For Lazy Loading.
  // { path: 'recipes', loadChildren: './recipes/recipe_module#RecipeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
