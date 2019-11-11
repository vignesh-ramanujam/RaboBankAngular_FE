import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import Issue from '../model/issue';
import { CsvReaderService } from '../services/csv-reader.service'
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent {


  selectedFile: File = null;
  issues: Issue[] = null;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ["firstName", "surName", "issueCount", "dateOfBirth"];
  constructor(private csvReaderService: CsvReaderService) {

  }
  searchKey = "";
  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['name', 'id', 'favouriteColour', 'pet'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  readCsvFile() {
    this.csvReaderService.readCsvFile(this.selectedFile)
      .then(
        resp => {
          this.issues = resp;
          this.listData = new MatTableDataSource(this.issues);
          this.listData.sort = this.sort;
        }
      )
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue;
  }

  onSearchClear() {
    this.searchKey = "";
  }


}



