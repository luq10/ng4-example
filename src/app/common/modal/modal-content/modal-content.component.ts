import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html'
})
export class ModalContentComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
