import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-customgrid',
  templateUrl: './customgrid.component.html',
  styleUrls: ['./customgrid.component.scss']
})
export class CustomGridComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'customGrid';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
