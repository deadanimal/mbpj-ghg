import { Component, OnInit, NgZone } from '@angular/core';

import { forkJoin, Subscription } from 'rxjs';
import * as moment from 'moment';
import swal from 'sweetalert2';

import { User } from 'src/app/shared/services/users/users.model';
import { HouseTemp, House, HouseExtended } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router, NavigationExtras } from '@angular/router';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { buildingTypes } from 'src/app/shared/options/building-types';
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
export class HousesComponent implements OnInit {

  // Data
  houses: HouseExtended[] = []
  houseStatistics: any
  selectedHouses: HouseTemp

  // Predefined
  houseTypes = buildingTypes

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

  // Subscriber
  subscription: Subscription

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
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getData() {
    this.loadingBar.start()
    this.subscription = forkJoin([
      this.houseService.getAll(),
      this.userService.getAll(),
      this.houseService.getStatistics()
    ]).subscribe(
      (res) => {
        this.loadingBar.complete()
      },
      (err) => {
        this.loadingBar.complete()
      },
      () => {
        this.houses = this.houseService.houses
        this.houseStatistics = this.houseService.houseStatistics
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
      return d.owner?.full_name.toLowerCase().indexOf(val)!== -1 || !val;
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
    let chart = am4core.create('chart-house-summary', am4charts.PieChart);

    // Add data
    chart.data = [
      {
        'building': 'Condominium',
        'amount': this.houseStatistics.total_all
      }, 
      {
        'building': 'Apartment / Service Apartment',
        'amount': this.houseStatistics.total_apartment
      }, 
      {
        'building': 'Flat',
        'amount': this.houseStatistics.total_flat
      }, 
      {
        'building': 'Bungalow / Semidetached',
        'amount': this.houseStatistics.total_bungalow
      }, 
      {
        'building': 'Terrace House',
        'amount': this.houseStatistics.total_terrace
      }, 
      {
        'building': 'Townhouse',
        'amount': this.houseStatistics.total_town
      }, 
      {
        'building': 'Other',
        'amount': this.houseStatistics.total_other
      }
    ];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'amount';
    pieSeries.dataFields.category = 'building';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chart = chart
  }

  view(selected) {
    let path = '/admin/houses/detail'
    let extras = selected['id']
    let queryParams = {
      queryParams: {
        id: extras
      }
    }
    return this.router.navigate([path], queryParams)
  }

}
