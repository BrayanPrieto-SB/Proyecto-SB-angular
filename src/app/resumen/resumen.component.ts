import { Component, OnInit, ViewChild } from '@angular/core';
import { ResumenService } from '../services/resumen.service';
import { Resumen } from '../shared/resumen';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { filter } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { Pipe, PipeTransform } from '@angular/core';



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
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
  providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ResumenComponent implements OnInit {
  date = new FormControl(moment());
  displayedColumns: string[] = ['nombre','minutos','valor'];
  resumenes: Resumen[];
//dataSource1: DataSource<Resumen>;
 // dataSource1 = new MatTableDataSource();
  dataSource = new MatTableDataSource<Resumen>();
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private resumenService: ResumenService ) { }



  ngOnInit(): void {

    this.resumenService.mostrarResumenTotal().subscribe(data => {
      this.resumenes = data;
      this.dataSource= new MatTableDataSource(this.resumenes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  chosenYearHandler(normalizedYear: Moment) {
    
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    //console.log(this.date.value.year());
       
  }
  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    //console.log(this.date.value.month()+1);
    datepicker.close();

  }

  // private mostrarResumen(anio,mes){
  //   this.resumenService.mostrarResumen(this.date.value.year(),this.date.value.month()+1).subscribe(data => {
  //     this.resumenes = data;
  //   })
  // }
  //dataSource = this.mostrarResumen(this.date.value.year(),this.date.value.month()+1);

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

onSubmit(){
  this.resumenService.mostrarResumen(this.date.value.year(),this.date.value.month()+1).subscribe(data => {
    this.resumenes = data;
    this.dataSource= new MatTableDataSource(this.resumenes);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })

  console.log(this.date.value.year());
  console.log(this.date.value.month()+1);
}
  

}
