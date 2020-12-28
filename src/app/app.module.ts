import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';












import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CrearconvenioComponent } from './crearconvenio/crearconvenio.component';
import { ConvenioinfoComponent } from './convenioinfo/convenioinfo.component';
import { ResumenComponent } from './resumen/resumen.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HighlightDirective,
    CrearconvenioComponent,
    ConvenioinfoComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
