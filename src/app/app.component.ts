import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  displayedColumns: string[] = [
    'id',
    'currentTime',
    'customerName',
    'customerPhone',
    'a',
    'name1',
    'name2',
    'name3',
    'name4',
    'name5',
    'b',
    'name6',
    'name7',
    'name8',
    'name9',
    'name10',
    'c',
    'name11',
    'name12',
    'name13',
    'name14',
    'name15',
    'd',
    'name16',
    'name17',
    'name18',
    'name19',
    'name20',
    'e',
    'name21',
    'name22',
    'name23',
    'name24',
    'name25',
    'f',
    'name26',
    'name27',
    'name28',
    'name29',
    'name30',
    'g',
    'name31',
    'name32',
    'name33',
    'name34',
    'name35',
    'h',
    'name36',
    'name37',
    'name38',
    'name39',
    'name40',
    'i',
    'name41',
    'name42',
    'name43',
    'name44',
    'name45',
    'j',
    'name46',
    'name47',
    'name48',
    'name49',
    'name50',
    'k',
    'name51',
    'name52',
    'name53',
    'name54',
    'name55',
    'l',
    'name56',
    'name57',
    'name58',
    'name59',
    'name60',
    'm',
    'name61',
    'name62',
    'name63',
    'name64',
    'name65',
    'n',
    'name66',
    'name67',
    'name68',
    'name69',
    'name70',
    'o',
    'name71',
    'name72',
    'name73',
    'name74',
    'name75',
    'p',
    'name76',
    'name77',
    'name78',
    'name79',
    'name80',
    'q',
    'name81',
    'name82',
    'name83',
    'name84',
    'name85',
    'r',
    'name86',
    'name87',
    'name88',
    'name89',
    'name90',
    's',
    'name91',
    'name92',
    'name93',
    'name94',
    'name95',
    't',
    'name96',
    'name97',
    'name98',
    'name99',
    'name100',
    'u',
    'total',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
}
