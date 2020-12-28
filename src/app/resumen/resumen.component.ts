import { Component, OnInit } from '@angular/core';
import { ResumenService } from '../services/resumen.service';
import { Resumen } from '../shared/resumen';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
    
  resumenes: Resumen[];

  constructor(private resumenService: ResumenService ) { }

  ngOnInit(): void {
  }

  private mostrarResumen(){
    this.resumenService.mostrarResumen().subscribe(data => {
      this.resumenes = data;
    })
  }

  displayedColumns: string[] = ['nombre','minutos','valor'];
  dataSource = this.resumenService.mostrarResumen();
  

}
