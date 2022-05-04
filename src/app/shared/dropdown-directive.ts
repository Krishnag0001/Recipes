import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // //   //  isOpen = false;
  // //    @HostBinding ('class.open') isOpen = false;

  // //    @HostListener('click') toggleOpen(){
  // //      this.isOpen = !this.isOpen
  // //    }

  // // }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // @HostListener('click') toggleOpen(): void {
    // this.isOpen = !this.isOpen;
    let part = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    } else {
      this.renderer.removeClass(part, 'show');
    }
  }
}

// import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {

//   constructor(private elRef: ElementRef, renderer: Renderer2) {
//     @HostBinding('class.open') isOpen = false;
//     @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//       this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//       let part = this.elRef.nativeElement.querySelector('.dropdown-menu');
//
//   }
// }
