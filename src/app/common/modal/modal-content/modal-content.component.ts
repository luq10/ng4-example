import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html'
})
export class ModalContentComponent implements OnInit {
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();
  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  open() {
    this.isOpen = true;
    this.opened.emit();
  }

  close() {
    this.isOpen = false;
    this.closed.emit();
  }
}
