import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule

} from '@angular/material';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

const Material = [MatButtonModule, MatToolbarModule, MatCardModule, MatTableModule, MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatIconModule
]
@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
