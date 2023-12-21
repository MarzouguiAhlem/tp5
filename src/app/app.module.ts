import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './components/action/action.component';
import { MemberComponent } from './components/member/member.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionService } from './services/action.service';


@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    MemberComponent,
    ActionListComponent,
    HeaderComponent,
    LandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Add FormsModule here
  ],
  providers: [ActionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
