// app.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    });
  }

  onMenuItemClicked(menuItem: any) {
    let headers = Object.keys(this.config[menuItem.dataKey][0]);
    let tableData = this.config[menuItem.dataKey];
    this.tableconfig = {label:menuItem.label,menuItems:this.config.menuItems,tableData: tableData,headers:headers};
  }
}
