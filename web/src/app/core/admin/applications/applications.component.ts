import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';

import { LoadingBarService } from '@ngx-loading-bar/core';

import { ApplicationExtended } from 'src/app/shared/services/applications/applications.model';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit, OnDestroy {

  // Data
  applications: ApplicationExtended[] = []
  submitteds: ApplicationExtended[] = []
  evaluations: ApplicationExtended[] = []
  others: ApplicationExtended[] = []
  statistics: any

  // Table
  // Submitted evalutions
  tableSubmittedEntries: number = 5
  tableSubmittedSelected: any[] = []
  tableSubmittedTemp = []
  tableSubmittedActiveRow: any
  tableSubmittedRows: any = []
  // Evaluation evalutions
  tableEvaluationEntries: number = 5
  tableEvaluationSelected: any[] = []
  tableEvaluationTemp = []
  tableEvaluationActiveRow: any
  tableEvaluationRows: any = []
  // Other evalutions
  tableOtherEntries: number = 5
  tableOtherSelected: any[] = []
  tableOtherTemp = []
  tableOtherActiveRow: any
  tableOtherRows: any = []

  tableMessages = {
    emptyMessage: 'No records found',
    totalMessage: 'record'
  }
  SelectionType = SelectionType;

  // Checker
  isSubmittedEmpty: boolean = true
  isEvaluationEmpty: boolean = true
  isOtherEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Chart
  chart: any

  // Subscriber
  subscription: Subscription

  constructor(
    private applicationService: ApplicationsService,
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

    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          this.chart.dispose()
        }
      }
    )
  }

  getData() {
    this.loadingBar.start()
    this.subscription = forkJoin([
      this.applicationService.filter(),
      this.applicationService.getAll(),
      this.applicationService.getMonthlyStatistics()
    ]).subscribe(
      (res) => {
        // console.log('all', res)
        this.loadingBar.complete()
        this.submitteds = this.applicationService.applicationsFiltered['applications']['submitted']
        this.evaluations = this.applicationService.applicationsFiltered['applications']['evaluation']
        this.others = this.applicationService.applicationsFiltered['applications']['others']
      },
      (err) => {
        this.loadingBar.complete()
      },
      () => {
        // Submitted applications table
        this.tableSubmittedRows = [...this.submitteds]
        this.tableSubmittedTemp = this.tableSubmittedRows.map((prop, key) => {
          return {
            ...prop
          };
        });

        if (this.tableSubmittedTemp.length >= 1) {
          this.isSubmittedEmpty = false
        }
        else {
          this.isSubmittedEmpty = true
        }

        // Evaluation applications table
        this.tableEvaluationRows = [...this.evaluations]
        this.tableEvaluationTemp = this.tableEvaluationRows.map((prop, key) => {
          return {
            ...prop
          };
        });

        if (this.tableEvaluationTemp.length >= 1) {
          this.isEvaluationEmpty = false
        }
        else {
          this.isEvaluationEmpty = true
        }

        // Others applications table
        this.tableOtherRows = [...this.others]
        this.tableOtherTemp = this.tableOtherRows.map((prop, key) => {
          return {
            ...prop
          };
        });

        if (this.tableOtherTemp.length >= 1) {
          this.isOtherEmpty = false
        }
        else {
          this.isOtherEmpty = true
        }

        // Statistics
        this.statistics = this.applicationService.statistics
        this.getChart()
      }
    );
  }

  view(selected) {
    let path = '/admin/applications/detail'
    let extras = selected['application']['id']
    let queryParams = {
      queryParams: {
        id: extras
      }
    }

    return this.router.navigate([path], queryParams)
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

  entriesChange($event, type: string) {
    if (type == 'SM') {
      this.tableSubmittedEntries = $event.target.value;
    }
    else if (type == 'EV') {
      this.tableEvaluationEntries = $event.target.value;
    }
    else if (type == 'OT') {
      this.tableOtherEntries = $event.target.value;
    }
  }

  filterTable($event, type: string) {
    let val = $event.target.value.toLowerCase();
    if (type == 'SM') {
      this.tableSubmittedTemp = this.tableSubmittedRows.filter(function (d) {
        return d.applicant.full_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    if (type == 'EV') {
      this.tableEvaluationTemp = this.tableEvaluationRows.filter(function (d) {
        return d.applicant.full_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    if (type == 'OT') {
      this.tableOtherTemp = this.tableOtherRows.filter(function (d) {
        return d.applicant.full_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
  }

  onSelect({ selected }, type: string) {
    if (type == 'SM') {
      this.tableSubmittedSelected.splice(0, this.tableSubmittedSelected.length);
      this.tableSubmittedSelected.push(...selected);
    }
    else if (type == 'EV') {
      this.tableEvaluationSelected.splice(0, this.tableEvaluationSelected.length);
      this.tableEvaluationSelected.push(...selected);
    }
    else if (type == 'OT') {
      this.tableOtherSelected.splice(0, this.tableOtherSelected.length);
      this.tableOtherSelected.push(...selected);
    }
  }

  onActivate(event, type: string) {
    if (type == 'SM') {
      this.tableSubmittedActiveRow = event.row;
    }
    else if (type == 'EV') {
      this.tableEvaluationActiveRow = event.row;
    }
    else if (type == 'OT') {
      this.tableOtherActiveRow = event.row;
    }
  }

  getChart() {
    // console.log('Get chart')
    let chart = am4core.create('chart-application-summary', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        'month': 'Jan',
        'total': this.statistics['january']
      }, 
      {
        'month': 'Feb',
        'total': this.statistics['february']
      }, 
      {
        'month': 'Mar',
        'total': this.statistics['march']
      }, 
      {
        'month': 'Apr',
        'total': this.statistics['april']
      }, 
      {
        'month': 'May',
        'total': this.statistics['may']
      }, 
      {
        'month': 'Jun',
        'total': this.statistics['june']
      }, 
      {
        'month': 'Jul',
        'total': this.statistics['july']
      }, 
      {
        'month': 'Aug',
        'total': this.statistics['august']
      }, 
      {
        'month': 'Sep',
        'total': this.statistics['september']
      }, 
      {
        'month': 'Oct',
        'total': this.statistics['october']
      }, 
      {
        'month': 'Nov',
        'total': this.statistics['november']
      }, 
      {
        'month': 'Dec',
        'total': this.statistics['december']
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'month';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    // categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = 'total';
    series.dataFields.categoryX = 'month';
    series.tooltipText = '[{categoryX}: bold]{valueY}[/]';
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = 'vertical';

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create('hover');
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add('fill', function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart = chart
  }

}
