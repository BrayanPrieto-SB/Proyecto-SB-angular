import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog'; 
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {HomeComponent} from '../home/home.component';
import { ConvenioService } from '../services/convenio.service';
import { Convenio } from '../shared/convenio';
import { ArchivoService } from '../services/archivo.service';
import { saveAs } from 'file-saver';





import { ActivatedRoute } from '@angular/router';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';

import {default as _rollupMoment, Moment} from 'moment';
import { FormControl } from '@angular/forms';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { SelectionModel } from '@angular/cdk/collections';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-convenioinfo',
  templateUrl: './convenioinfo.component.html',
  styleUrls: ['./convenioinfo.component.scss'],
  providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ConvenioinfoComponent implements OnInit {

  displayedColumns: string[] = ['nombre','empTelLocal_nit','correo','valor_minuto','convenio_no'];

  dataSource = this.convenioService.listarConvenio(this.data.nit);
  
  convenio: Convenio[];
  responsive = true;
  cols = 1;
  date = new FormControl(moment());
  archivo: Blob;




  campos: {
    name: string;
    selected: boolean;
  }[] = [
    {
      name: "Duracion",
      selected: false
    },
    {
      name: "Destino",
      selected: false
    },
    {
      name: "Valor por minuto",
      selected: false
    }
  ];

  selectedOptions: string[];



  chosenYearHandler(normalizedYear: Moment) {
    
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    
    
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();

  }





  
  constructor( private convenioService: ConvenioService, 
    private archivoService: ArchivoService,
    public dialogRef: MatDialogRef<ConvenioinfoComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void{

    this.selectedOptions = this.campos
    .filter(item => item.selected)
    .map(item => item.name);

    this.convenioService.listarConvenio(this.data.nit).subscribe(data =>this.convenio=data);
    
  }




  onAreaListControlChanged(list) {
    this.selectedOptions = list.selectedOptions.selected.map(
      item => item.value
    );

  }
private descargarReporteComponent(nit,anio,mes,dur,dest,min_val){
    this.archivoService.descargarReporte1(nit,anio,mes,dur,dest,min_val).subscribe(response=>{

      const newBlob = new Blob([(response)], { type: 'application/text' });
      saveAs(newBlob, 'Archivo_'+ nit +"_"+ anio+"_"+mes);
 
      
    });
    }



  onSubmit(){

    
    this.descargarReporteComponent(this.data.nit,this.date.value.year(),(this.date.value.month()+1),this.selectedOptions.includes('Duracion'),this.selectedOptions.includes('Destino'),this.selectedOptions.includes('Valor por minuto'));

    this.dialogRef.close();
  }


  
}
