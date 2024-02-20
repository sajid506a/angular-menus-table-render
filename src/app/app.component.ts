// app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config: any;
  tableConfig: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/menu-data.json').subscribe(data => {
      this.config = data;
      if (this.config && this.config.menuItems && this.config.menuItems.length > 0) {
        this.updateTableConfig(this.config.menuItems[0]);
      }
    });
  }

  onMenuItemClicked(menuItem: any) {
    this.updateTableConfig(menuItem);
  }

  private updateTableConfig(menuItem: any) {
    const key = menuItem.dataKey;
    if (this.config && this.config[key] && this.config[key].length > 0) {
      const headers = Object.keys(this.config[key][0]);
      this.tableConfig = {
        label: menuItem.label,
        menuItems: this.config.menuItems,
        tableData: this.config[key],
        headers: headers
      };
    }
  }
}
