import { Component, OnInit, NgZone } from '@angular/core';

import { forkJoin } from 'rxjs';
import * as moment from 'moment';
import swal from 'sweetalert2';

import { User } from 'src/app/shared/services/users/users.model';
import { HouseTemp, House } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router, NavigationExtras } from '@angular/router';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  // Data
  houses: HouseTemp[] = []
  houseStatistics: any
  selectedHouses: HouseTemp

  // Table
  tableEntries: number = 5
  tableSelected: any[] = []
  tableTemp = []
  tableActiveRow: any
  tableRows: any = []
  tableMessages = {
    emptyMessage: 'No record found',
    totalMessage: 'record'
  }
  SelectionType = SelectionType;

  // Checker
  isEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Chart
  chart: any

  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private router: Router,
    private zone: NgZone
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getData() {
    forkJoin([
      this.houseService.getAll(),
      this.userService.getAll(),
      this.houseService.getStatistics()
    ]).subscribe(
      (res) => {
        this.filterData()
      }
    )
  }

  filterData() {
    let filtering = new Promise(
      (resolve, reject) => {
        this.houseStatistics = this.houseService.houseStatistics
        this.houseService.houses.forEach(
          (house: House, index, array) => {
            this.userService.users.forEach(
              (user: User) => {
                if (house.owner == user.id) {
                  let house_type = ''

                  if (house.building_type == 'CD') house_type = 'Condominium'
                  else if (house.building_type == 'FL') house_type = 'Flat'
                  else if (house.building_type == 'TO') house_type = 'Townhouse'
                  else if (house.building_type == 'TE') house_type = 'Terrace House'
                  else if (house.building_type == 'BS') house_type = 'Bungalow / Semidetached'
                  else if (house.building_type == 'AS') house_type = 'Apartment / Service Apartment'
                  else if (house.building_type == 'OT') house_type = 'Other'

                  this.houses.push({
                    id: house.id,
                    owner: house.owner,
                    owner_name: user.full_name,
                    location: house.location,
                    address: house.address,
                    postcode: house.postcode,
                    area: house.area,
                    building_type: house_type,
                    assessment_tax_account: house.assessment_tax_account,
                    assessment_tax_doc: house.assessment_tax_doc,
                    staying_since: house.staying_since,
                    relationship_type: house.relationship_type,
                    occupants: house.occupants,
                    active: house.active,
                    created_at: house.created_at,
                    modified_at: house.modified_at
                  })
                }
              }
            )
            // console.log('index', index)
            // console.log('arr', array.length)
            if (index == array.length - 1) resolve();
          }
        )
      }
    )

    filtering.then(
      () => {
        this.tableRows = this.houses
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key + 1
          };
        });

        if (this.tableTemp.length >= 1) {
          this.isEmpty = false
        }
        else {
          this.isEmpty = true
        }

        this.getChart()
      }
    )
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function (d) {
      return d.staff_name.toLowerCase().indexOf(val)!== -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  getChart() {
    let chart = am4core.create("chart-house-summary", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        "building": "Condominium",
        "amount": this.houseStatistics.total_all
      }, 
      {
        "building": "Apartment / Service Apartment",
        "amount": this.houseStatistics.total_apartment
      }, 
      {
        "building": "Flat",
        "amount": this.houseStatistics.total_flat
      }, 
      {
        "building": "Bungalow / Semidetached",
        "amount": this.houseStatistics.total_bungalow
      }, 
      {
        "building": "Terrace House",
        "amount": this.houseStatistics.total_terrace
      }, 
      {
        "building": "Townhouse",
        "amount": this.houseStatistics.total_town
      }, 
      {
        "building": "Other",
        "amount": this.houseStatistics.total_other
      }
    ];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "building";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chart = chart
  }

  navigatePage(path: string, selectedHouse) {
    let extras = selectedHouse
    this.router.navigate([path], extras)
  }

}
