import { Component, OnInit , Input, Output, ViewChild} from '@angular/core';
import { ConvenioService } from '../services/convenio.service';
import { Convenio } from '../shared/convenio';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material/dialog';
import { ConvenioinfoComponent } from '../convenioinfo/convenioinfo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  convenios: Convenio[]; 
  searchKey: string;
  dialogValue: string;
  sendValue: any;
  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['empTelLocal_nit','nombre','actions'];
  dataSource = new MatTableDataSource<Convenio>();



  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private convenioService: ConvenioService, 
    private router: Router,
    private route: ActivatedRoute, 
    public dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.convenioService.listarConvenios().subscribe(data => {
      this.convenios = data;
      this.dataSource = new MatTableDataSource(this.convenios);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    })
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }


  openConvenioInfo(nit){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "40%";
    const dialogRef = this.dialog.open(ConvenioinfoComponent, {width: '50%', height:'65%', data : { nit }} );
  }


  

  
}
