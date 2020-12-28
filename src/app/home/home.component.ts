import { Component, OnInit , Input, Output} from '@angular/core';
import { ConvenioService } from '../services/convenio.service';
import { Convenio } from '../shared/convenio';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConvenioinfoComponent } from '../convenioinfo/convenioinfo.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  convenios: Convenio[];
  @Output() elemento :number; 

  constructor(private convenioService: ConvenioService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    
 

  }
  private listarConvenios(){
    this.convenioService.listarConvenios().subscribe(data => {
      this.convenios = data;
    })
  }
  openConvenioInfo(){
    this.dialog.open(ConvenioinfoComponent, {width: '500px', height:'450px'})
  }
  irRuta(){
    this.router.navigate(['/home']);
  }
  
  displayedColumns: string[] = ['empTelLocal_nit','nombre'];
  dataSource = this.convenioService.listarConvenios();
  
  
}
