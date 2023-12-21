import { Component } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent {
  newAction: Action = {
    name: '',
    objective: '',
    responsible: { name: '', age: 0 },
    beneficiaries: 0,
    createdAt: new Date(),
    status: 'non réussi',
  };

  constructor(private actionService: ActionService) {}

  addAction(): void {
    this.actionService.addAction(this.newAction);
    this.newAction = {
      name: '',
      objective: '',
      responsible: { name: '', age: 0 },
      beneficiaries: 0,
      createdAt: new Date(),
      status: 'non réussi',
    };
  }
}
