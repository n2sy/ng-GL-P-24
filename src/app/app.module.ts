import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ROUTING_GL_P } from './app.routing';
import { ChildComponent } from './child/child.component';
import { CustomdDirDirective } from './customd-dir.directive';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { DirectComponent } from './direct/direct.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { RecruesComponent } from './recrues/recrues.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    DirectComponent,
    CustomdDirDirective,
    RecruesComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    UpdateComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, ROUTING_GL_P],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
