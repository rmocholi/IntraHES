import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntraHESComponent } from './intra-hes/intra-hes.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './admin/auth/auth.component';
import { PageComponent } from './admin/page/page.component';
import { PagingService } from './paging.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntraHESComponent,
    AdminComponent,
    AuthComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
