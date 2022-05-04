import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { StoreDataService } from '../shared/store-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;
  userSub!: Subscription;
  constructor(private storeDataService: StoreDataService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAUthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  onSaveData() {
    this.storeDataService.saveRecipe();
  }

  onGetData(){
    this.storeDataService.fetchData().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
ngOnDestroy(): void {
  this.userSub.unsubscribe();
}
}
