import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  //the value is passed in prop in same name, so it will be automatically assigned to product
  // "!" is used to show that there is no null / undefined values // product! : Product
  @Output() notify = new EventEmitter();
}

/**
 * 
 * implements OnInit
 *  constructor() {}

  ngOnInit(): void {}
 */
