import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html'
})
export class ModalBasicComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() title: string;
  @Input() message: string;
  @Output() isOpenChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  open() {
    this.isOpen = true;
    this.updateIsOpen();
  }
  close() {
    this.isOpen = false;
    this.updateIsOpen();
  }

  updateIsOpen() {
    this.isOpenChange.emit(this.isOpen);
  }
}
