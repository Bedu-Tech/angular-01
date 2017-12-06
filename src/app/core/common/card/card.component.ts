import { Component, OnInit } from '@angular/core';

import { Check } from "../../../models/check.model";
import { Card } from "../../../models/card.model";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private card: Card = {
    id: 1,
    text: 'Agregar router a la aplicación',
    status: 0,
    checkList: [
      { status: false, dueDate: new Date(), text: "Tarea1" },
      { status: false, dueDate: new Date(), text: "Tarea2" },
      { status: false, dueDate: new Date(), text: "Tarea3" },
      { status: false, dueDate: new Date(), text: "Tarea4" },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
