import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { User } from 'src/assets/mock/admin-user/users.model'
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

import * as moment from 'moment';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {

  // Data
  reportType: string = 'application'
  statistics: any

  // Chart
  chartStatus: any
  chartCategory: any
  chartApp: any

  // Datepicker
  bsDPConfig = { 
    isAnimated: true, 
    containerClass: 'theme-default'
  }

  // Subscriber
  subscription: Subscription

  constructor(
    private applicationService: ApplicationsService,
    private mockService: MocksService,
    private loadingBar: LoadingBarService,
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
      if (this.chartStatus) {
        this.chartStatus.dispose()
      }
      
      if (this.chartCategory) {
        this.chartCategory.dispose()
      }

      if (this.chartApp) {
        this.chartApp.dispose()
      }
    })
  }

  getData() {
    this.loadingBar.start()
    this.subscription = this.applicationService.getReportStatistics().subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.statistics = this.applicationService.statistics
        this.getCharts()
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartStatus()
      this.getChartCategory()
      this.getChartApp()
    })
  }

  getChartStatus() {
    this.chartStatus = am4core.create('adminReportStatus', am4charts.PieChart);

    // Add data
    this.chartStatus.data = [
      {
        'status': 'Approved',
        'amount': this.statistics['statistics']['status']['approved']
      }, 
      {
        'status': 'Rejected',
        'amount': this.statistics['statistics']['status']['rejected']
      }
    ];

    // Add and configure Series
    let pieSeries = this.chartStatus.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'amount';
    pieSeries.dataFields.category = 'status';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // Unhide zero values
    pieSeries.ignoreZeroValues = false

    pieSeries.radius = am4core.percent(60)

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
  
  }

  getChartCategory() {
    this.chartCategory = am4core.create('adminReportCategory', am4charts.XYChart);

    // Add data
    this.chartCategory.data = [
      {
        'category': 'Energy',
        'value': this.statistics['statistics']['category']['energy']
      }, 
      {
        'category': 'Waste',
        'value': this.statistics['statistics']['category']['waste']
      }, 
      {
        'category': 'Water',
        'value': this.statistics['statistics']['category']['water']
      }, 
      {
        'category': 'Transportation',
        'value': this.statistics['statistics']['category']['transportation']
      }, 
      {
        'category': 'Biodiversity',
        'value': this.statistics['statistics']['category']['biodiversity']
      }
    ];

    // Create axes

    let categoryAxis = this.chartCategory.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add('dy', function (dy, target) {
      if (target.dataItem && target.dataItem.index && 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = this.chartCategory.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = this.chartCategory.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.name = 'Value';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

  getChartApp() {
    this.chartApp = am4core.create('adminReportApp', am4charts.XYChart);
    this.chartApp.paddingRight = 20;

    let data = [
      {
        'year': '2011',
        'value': 100
      }, 
      {
        'year': '2012',
        'value': 200
      }, 
      {
        'year': '2013',
        'value': 300
      }, 
      {
        'year': '2014',
        'value': 250
      }, 
      {
        'year': '2015',
        'value': 500
      }, 
      {
        'year': '2016',
        'value': 800
      }, 
      {
        'year': '2017',
        'value': 750
      }, 
      {
        'year': '2018',
        'value': 879
      }, 
      {
        'year': '2019',
        'value': 1250
      }
    ];

    this.chartApp.data = data;
    this.chartApp.dateFormatter.inputDateFormat = 'yyyy';

    let dateAxis = this.chartApp.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.baseInterval = { timeUnit: 'year', count: 1 };

    let valueAxis = this.chartApp.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = this.chartApp.series.push(new am4charts.StepLineSeries());
    series.dataFields.dateX = 'year';
    series.dataFields.valueY = 'value';
    series.tooltipText = '{valueY.value}';
    series.strokeWidth = 3;

    this.chartApp.cursor = new am4charts.XYCursor();
    this.chartApp.cursor.xAxis = dateAxis;
    this.chartApp.cursor.fullWidthLineX = true;
    this.chartApp.cursor.lineX.strokeWidth = 0;
    this.chartApp.cursor.lineX.fill = this.chartApp.colors.getIndex(2);
    this.chartApp.cursor.lineX.fillOpacity = 0.1;

    this.chartApp.scrollbarX = new am4core.Scrollbar();
  }

  generateReport() {
    this.loadingBar.start()

    switch(this.reportType) {
      case 'application':
        this.subscription = this.applicationService.getApplicationReport().subscribe(
          () => {
            this.loadingBar.complete()
          },
          () => {
            this.loadingBar.complete()
          },
          () => {
            window.open(this.applicationService.reportLink, '_blank');
          }
        )
        break;
      case 'approved':
        this.subscription = this.applicationService.getApprovedReport().subscribe(
          () => {
            this.loadingBar.complete()
          },
          () => {
            this.loadingBar.complete()
          },
          () => {
            window.open(this.applicationService.reportLink, '_blank');
          }
        )
        break;
      case 'building':
        this.subscription = this.applicationService.getBuildingReport().subscribe(
          () => {
            this.loadingBar.complete()
          },
          () => {
            this.loadingBar.complete()
          },
          () => {
            window.open(this.applicationService.reportLink, '_blank');
          }
        )
        break;
      case 'town':
        this.subscription = this.applicationService.getTownReport().subscribe(
          () => {
            this.loadingBar.complete()
          },
          () => {
            this.loadingBar.complete()
          },
          () => {
            window.open(this.applicationService.reportLink, '_blank');
          }
        )
        break;
      default:
        this.loadingBar.complete()
        break;
    }
  }
  

}
