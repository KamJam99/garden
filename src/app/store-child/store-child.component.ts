import { Component, OnInit, Input } from '@angular/core';
import { GardeningItem } from "../models/gardening-item";

@Component({
  selector: 'app-store-child',
  templateUrl: './store-child.component.html',
  styleUrls: ['./store-child.component.css']
})
export class StoreChildComponent implements OnInit {

  @Input() storeItem?: GardeningItem;

  constructor() { }

  ngOnInit(): void {
  }

}
