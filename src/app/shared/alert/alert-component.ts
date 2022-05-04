import {
   Component,
   Input,
   OnInit,
   Output,
   EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert-component.html',
  styleUrls: ['./alert-component.css'],
})
export class AlertComponent implements OnInit {
  constructor( private router: Router) {}

  @Input() message!: string;
  @Output() closeEvent = new EventEmitter<void>();

  onClose(){
   this.closeEvent.emit();
  }
  ngOnInit(): void {}
}
