import {Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tableconfig: any;
  tableconfigTemp:any;
  config: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/menu-data.json').subscribe(data => {
      this.config = data;
      const key = this.config['menuItems'][0]['dataKey'];
      const tableData = this.config[key];
      const headers = Object.keys(tableData[0]);
      this.tableconfig = {label:this.config['menuItems'][0]['label'],menuItems:this.config.menuItems,tableData: tableData,headers:headers};
      console.log(this.tableconfig);
    });
  }

  onMenuItemClicked(menuItem: any) {
    const key = this.config[menuItem.dataKey][0]
    const headers = Object.keys(key);
    const tableData = this.config[menuItem.dataKey];
    this.tableconfig = {label:menuItem.label,menuItems:this.config.menuItems,tableData: tableData,headers:headers};
  }
}
