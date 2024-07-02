import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { DirectComponent } from './direct/direct.component';
import { CustomdDirDirective } from './customd-dir.directive';
<<<<<<< HEAD
import { ServersComponent } from './servers/servers.component';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, ListeComponent, ItemComponent, DetailsComponent, DirectComponent, CustomdDirDirective, ServersComponent, ShortPipe],
=======
import { RecruesComponent } from './recrues/recrues.component';

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
  ],
>>>>>>> 4f719aacdf4e7b1bcf5dc056aba8cdfa7fad779e
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
