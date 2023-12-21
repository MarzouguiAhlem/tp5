import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actions: Action[] = [];

  getActions(): Action[] {
    return this.actions;
  }

  addAction(action: Action): void {
    this.actions.push(action);
  }

  deleteAction(index: number): void {
    this.actions.splice(index, 1);
  }

  markAsSuccess(index: number, updatedAction: Action): void {
    // Your logic to update the action at the specified index with the updatedAction
    this.actions[index] = updatedAction;
  }
  updateAction(updatedAction: Action): void {
    const index = this.actions.findIndex(action => action === updatedAction);
    if (index !== -1) {
      this.actions[index].name = updatedAction.name;  // Mettez à jour le nom de l'action
    }
  }
  
}

