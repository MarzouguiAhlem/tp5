// Importez OnInit pour garantir que la méthode ngOnInit est correctement définie
import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
})
export class ActionListComponent implements OnInit {
  actions: Action[] = [];
  newAction: Action = {
    name: '',
    objective: '',
    responsible: { name: '', age: 0 },
    beneficiaries: 0,
    status: 'non réussi',
    createdAt: new Date(),
  };
  selectedStatus: string = 'toutes';
  searchTerm: string = '';

  ngOnInit(): void {
    this.actions = this.actionService.getActions();
  }

  constructor(private actionService: ActionService) {
    this.actions = this.actionService.getActions();
  }

  startEditing(action: Action): void {
    action.editing = true;
    action.editingTitle = action.name;
  }

  stopEditing(action: Action): void {
    action.editing = false;
    if (action.editingTitle) {
      action.name = action.editingTitle;
      // Mettez à jour le titre de l'action dans le service
      this.actionService.updateAction(action);
    }
  }

  get filteredActions(): Action[] {
    let filteredByStatus = this.actions;
    
    if (this.selectedStatus !== 'toutes') {
      filteredByStatus = this.actions.filter(action => action.status === this.selectedStatus);
    }
  
    return this.searchTerm.trim() === '' ? filteredByStatus : this.searchActions();
  }

  searchActions(): Action[] {
    return this.actions.filter(action =>
      action.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteAction(action: Action): void {
    const index = this.actions.indexOf(action);
    if (index !== -1) {
      this.actionService.deleteAction(index);
    }
  }

  markAsSuccess(action: Action): void {
    const index = this.actions.indexOf(action);
    if (index !== -1) {
      // Votre logique pour marquer comme réussi ici
      const updatedAction: Action = { ...action, status: 'réussi' };
      this.actionService.markAsSuccess(index, updatedAction);
    }
  }
  

  addAction(): void {
    this.actionService.addAction(this.newAction);
    // Reset the form after adding
    this.resetForm();
  }

  private resetForm(): void {
    this.newAction = {
      name: '',
      objective: '',
      responsible: { name: '', age: 0 },
      beneficiaries: 0,
      status: 'non réussi',
      createdAt: new Date(),
    };
  }
}


