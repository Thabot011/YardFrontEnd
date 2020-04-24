import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [TableComponent],
  imports: [
      CommonModule,
      MatTableModule,
      MatProgressSpinnerModule
  ]
})
export class SharedModule { }
