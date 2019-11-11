import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';
import { HttpClientModule } from '@angular/common/http';
import { CsvReaderService } from '../app/services/csv-reader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueListComponent } from './issue-list/issue-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CsvReaderComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CsvReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
