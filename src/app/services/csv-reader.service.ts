import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Issue from '../model/issue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

  issue: Issue[] = null;



  constructor(private http: HttpClient) { }

  readCsvFile(selectedFile: File): Promise<Issue[]> {
    let url = "http://localhost:9090/rabobank/issues";
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    return this.http.post<Issue[]>(url, formData).toPromise();
  }
}
