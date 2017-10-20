import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderbyPipe } from './orderby.pipe';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { TableComponent } from './dashboard/table/table.component';
import { UserService } from './user.service';
import { PollService } from './poll.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderbyPipe,
    CreateComponent,
    DashboardComponent,
    LoginComponent,
    TableComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
