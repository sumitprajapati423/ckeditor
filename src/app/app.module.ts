
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CommonModule } from '@angular/common';
import { BitdraggableModule } from '@bitbeast/bitdraggable';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShareButtonsModule.withConfig({
      debug:true
    }),
    ShareIconsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BitdraggableModule,
    CommonModule,
    CKEditorModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
