import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, } from '@angular/core';

import { AlertComponent } from './alert/alert-component';
import { DropdownDirective } from './dropdown-directive';
import { LoadingSpinnerComponent } from './loading_spinner/loading-spinner.component';
import { PlaceholderDirective } from './palceholder/placeholder-directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
