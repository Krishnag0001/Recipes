import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredents.model';
import { ShopingListServices } from '../shoping-list.service';

@Component({
  selector:    'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls:  ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy{
// @ViewChild('nameInput') nameInputRef!: ElementRef;
// @ViewChild('amountInput') amountInputRef!: ElementRef;

// @Output() ingridentAdded = new EventEmitter<Ingredient>();
@ViewChild('form') shopingForm!: NgForm;
subscription!: Subscription;
editMode = false;
editedItemNum!: number;
editedItem!: Ingredient;

  constructor( private shopingList: ShopingListServices) { }

  ngOnInit(): void {
    this.subscription = this.shopingList.editIngredient
    .subscribe(
      (index: number) => {
        this.editedItemNum = index;
        this.editMode = true;
        this.editedItem = this.shopingList.getIngredient(index);
        this.shopingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        }

        )
      }
    );
  }


  onSubmit(form:  NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient ( value.name, value.amount );
    if(this.editMode){
      this.shopingList.updateIngredients(this.editedItemNum, newIngredient)
    } else {
      this.shopingList.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    // this.ingridentAdded.emit(newIngredient)
  }
  onClear(){
    this.shopingForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shopingList.deleteIngredient(this.editedItemNum)
    this.shopingForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
