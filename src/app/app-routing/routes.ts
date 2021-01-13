import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CrearconvenioComponent } from '../crearconvenio/crearconvenio.component';
import { ConvenioinfoComponent } from '../convenioinfo/convenioinfo.component';
import { ResumenComponent } from '../resumen/resumen.component';
export const routes: Routes = [
    {path: 'home', component: HomeComponent},    
    {path: 'crearconvenio', component: CrearconvenioComponent},
    {path: 'home/:nit', component: ConvenioinfoComponent},
    {path: 'resumen', component: ResumenComponent},    
    {path: '', redirectTo: '/home', pathMatch: 'full'}

];