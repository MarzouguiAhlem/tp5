import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionListComponent } from './components/action-list/action-list.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'actions', component: ActionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
