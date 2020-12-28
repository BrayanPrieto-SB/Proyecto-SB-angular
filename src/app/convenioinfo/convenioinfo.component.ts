import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog'; 


@Component({
  selector: 'app-convenioinfo',
  templateUrl: './convenioinfo.component.html',
  styleUrls: ['./convenioinfo.component.scss']
})
export class ConvenioinfoComponent implements OnInit {
  @Input () nit: number;

  constructor(public dialogRef: MatDialogRef<ConvenioinfoComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.dialogRef.close();
  }

  displayedColumns: string[] = ['nombre','empTelLocal_nit','correo','valor_minuto'];

}
