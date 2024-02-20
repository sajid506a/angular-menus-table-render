import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() config: any;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit',this.config);
  }

  // ngOnChanges(config: any) {
  //   if (config) {
  //     const co = config.config.currentValue; 

  //     this.config = {...co}; 
  //   }
  // }
}
