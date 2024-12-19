import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public ganttData: any[] = [];
  public taskSettings: object = {};
  public splitterSettings?: object;

private SHEET_ID = '1RvJOMnnV0YNcVHqdTF7ux17bIobec18aJ17Nbiiup1U'; // Replace with your Google Sheet ID 
constructor(private http: HttpClient) {}

ngOnInit() {
 this.fetchGoogleSheetData();
 this.splitterSettings = {
  columnIndex: 4
};
  this.taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress'
  };
}

// Fetch data from Google Sheets 
fetchGoogleSheetData() {

const url = `https://docs.google.com/spreadsheets/d/${this.SHEET_ID}/export?format=csv&id=${this.SHEET_ID}&gid=0`;
  this.http.get(url, { responseType: 'text' }).subscribe(
    data => {
      const jsonData = Papa.parse(data, { header: true });
      this.ganttData = this.mapSheetDataToGanttData(jsonData.data);
    });
}
// Convert Google Sheets data to Gantt Chart format
mapSheetDataToGanttData(sheetData: any[]): any[] {
  return sheetData.map((row, index) => ({
    TaskID: +row['Task ID'],
    TaskName: row['Task Name'], 
    StartDate: new Date(row['Start Date']), 
    Duration: row['Duration'], 
    Progress: row['Progress'] 
  }));
}
}
