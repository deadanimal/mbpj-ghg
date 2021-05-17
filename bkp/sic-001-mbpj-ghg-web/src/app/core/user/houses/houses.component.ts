import { Component, OnInit, NgZone, ViewChild, OnDestroy } from '@angular/core';

import { House, MergedHouse } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';

import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

import { LoadingBarService } from '@ngx-loading-bar/core';


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
am4core.useTheme(am4themes_animated);


export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit, OnDestroy {

  public tempHouses: House[] = []
  public tempUsers: User[] = []
  public mergedHouses: any[] = []
  // public mergedHouses: MergedHouse[] = []

  public totalCondominium: number
  public totalFlat: number
  public totalApartment: number
  public totalBungalowSemi: number
  public totalTerrace: number
  public totalTownhouse: number

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  focus

  public chartHouseType

  constructor(
    private houseService: HousesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private zone: NgZone,
    public toastr: ToastrService,
    private router: Router
  ) {
    this.getData()
  }

  ngOnInit() {
    // this.zone.runOutsideAngular(() => {
    //   this.initChart()
    // })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartHouseType ) {
        this.chartHouseType.dispose()
      }
    })
  }

  mergeData() {
    this.mergedHouses = []
    this.totalCondominium = this.houseService.condominium.length
    this.totalFlat = this.houseService.flat.length
    this.totalApartment = this.houseService.apartment.length
    this.totalTerrace = this.houseService.terrace.length
    this.totalBungalowSemi = this.houseService.bungalowSemi.length
    this.totalTownhouse = this.houseService.townhouse.length
    this.tempHouses = this.houseService.retrievedHouses
    this.tempUsers = this.userService.users
    let mergerCounter: number = 0

    this.zone.runOutsideAngular(() => {
      this.initChart()
    })

    console.log('tempHouses', this.tempHouses)
    console.log('tempUsers', this.tempUsers)

    this.tempHouses.forEach(
      (house: House) => {
        this.tempUsers.forEach(
          (user: User) => {
            if (user.id == house.applicant){
              let building_type_full = ''
              if (house.building_type == 'CD') {
                building_type_full = 'Condominium'
              }
              else if (house.building_type == 'FL') {
                building_type_full = 'Flat'
              }
              else if (house.building_type == 'TO') {
                building_type_full = 'Townhouse'
              }
              else if (house.building_type == 'TE') {
                building_type_full = 'Terrace House'
              }
              else if (house.building_type == 'BS') {
                building_type_full = 'Bungalow / Semidetached'
              }
              else if (house.building_type == 'AS') {
                building_type_full = 'Apartment / Service Apartment'
              }
              else if (house.building_type == 'OT') {
                building_type_full = 'Other'
              }
              this.mergedHouses.push({
                id: house.id,
                applicant_id: house.applicant,
                applicant_name: user.full_name,
                applicant_phone: user.phone,
                applicant_email: user.email,
                address: house.address,
                assessment_tax_account: house.assessment_tax_account,
                building_type: house.building_type,
                building_type_full: building_type_full,
                staying_duration_years: house.staying_duration_years,
                staying_duration_months: house.staying_duration_months,
                permanent_occupant: house.permanent_occupant,
                vehicle_car: house.vehicle_car,
                vehicle_motorcycle: house.vehicle_motorcycle,
                vehicle_bicycle: house.vehicle_bicycle,
                vehicle_other: house.vehicle_other
              })
              // console.log(this.mergedHouses)
            }
          }
        )
        mergerCounter++
        if (mergerCounter === this.tempHouses.length){
          this.tableRows = [...this.mergedHouses]
          this.tableTemp = this.tableRows.map((prop, key) => {
          return {
              ...prop,
              no: key+1
            };
          });
        }
      }
    )
  }

  getData() {

    this.houseService.getAll().subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.userService.getAll().subscribe(
          () => {
          },
          () => {
          },
          () => {
            this.mergeData()
          }
        )
      }
    )
  }

  initChart() {
    this.chartHouseType = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    this.chartHouseType .data = [
      {
        "building": "Condominium",
        "amount": this.totalCondominium
      }, 
      {
        "building": "Apartment / Service Apartment",
        "amount": this.totalApartment
      }, 
      {
        "building": "Flat",
        "amount": this.totalFlat
      }, 
      {
        "building": "Bungalow / Semidetached",
        "amount": this.totalBungalowSemi
      }, 
      {
        "building": "Terrace house",
        "amount": this.totalTerrace
      }, 
      {
        "building": "Townhouse",
        "amount": this.totalTownhouse
      }
    ];

    // Set inner radius
    this.chartHouseType .innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = this.chartHouseType .series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "building";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;


  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  viewDetail(selectedHouse) {
    this.router.navigate(['/houses/details'], selectedHouse)
  }

}
