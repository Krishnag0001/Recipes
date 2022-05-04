import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInteceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShopingListServices } from "./shoping-list/shoping-list.service";


@NgModule({
  providers: [
    ShopingListServices,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInteceptorService,
      multi:true,
    },
  ],
})

export class CoreModules{}