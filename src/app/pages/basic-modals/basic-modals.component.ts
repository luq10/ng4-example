import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-modals',
  templateUrl: './basic-modals.component.html'
})
export class BasicModalsComponent implements OnInit {
  isBasicModalOpen: boolean = false;
  isFancyModalOpen: boolean = false;
  basicTitle: string = 'Basic';
  fancyTitle: string = 'Fancy';

  constructor() {}

  ngOnInit() {}

  openBasicModal() {
    this.isBasicModalOpen = true;
  }
  openFancyModal() {
    this.isFancyModalOpen = true;
  }
}
