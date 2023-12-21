import { Member } from "./member.model";

export interface Action {
  name: string;
  objective: string;
  responsible: Member;
  beneficiaries: number; // ajusté pour correspondre à la propriété utilisée dans le composant
  createdAt: Date;
  status: string; // Peut être "réussi" ou "non réussi"
  editing?: boolean; 
  editingTitle?: string;
}
