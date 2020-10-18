import { Component, OnInit, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import kelly from "@amcharts/amcharts4/themes/kelly.js";
import { ReportsService } from 'src/app/shared/services/reports/reports.service';
am4core.useTheme(am4themes_animated);
am4core.useTheme(kelly);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public chartStatus
  public chartTrend
  public chartCategory
  public chartApp
  public chartEnergy
  public chartWater
  public chartTransportation
  public chartBiodiversity
  public chartWaste

  constructor(
    public zone: NgZone,
    public toastr: ToastrService,
    private reportService: ReportsService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.initChartCategory()
      this.initChartStatus()
      this.initChartTrend()
      this.initChartApp()
      this.initChartEnergy()
      this.initChartWater()
      this.initChartTransportation()
      this.initChartWaste()
      this.initChartBiodiversity()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartCategory) {
        this.chartCategory.dispose()
      }
      if (this.chartStatus) {
        this.chartStatus.dispose()
      }
      if (this.chartTrend) {
        this.chartTrend.dispose()
      }
      if (this.chartApp) {
        this.chartApp.dispose()
      }
      if (this.chartEnergy) {
        this.chartEnergy.dispose()
      }
      if (this.chartWater) {
        this.chartWater.dispose()
      }
      if (this.chartTransportation) {
        this.chartTransportation.dispose()
      }
      if (this.chartWaste) {
        this.chartWaste.dispose()
      }
    })
  }

  initChartStatus() {
    this.zone.runOutsideAngular(() => {
      this.chartStatus = am4core.create("statusdiv", am4charts.PieChart);

      // Add data
      this.chartStatus.data = [{
        "status": "Approved",
        "amount": 501.9
      }, {
        "status": "Rejected",
        "amount": 301.9
      }];

      // Add and configure Series
      let pieSeries = this.chartStatus.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "status";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.radius = am4core.percent(60)

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
  }

  initChartTrend() {
    this.zone.runOutsideAngular(() => {
      this.chartTrend = am4core.create("trenddiv", am4charts.XYChart)
      this.chartTrend.data = [
        {
          "location": 'Old Town',
          "amount": 121
        },
        {
          "location": 'Bukit Gasing',
          "amount": 134
        },
        {
          "location": 'Taman Jaya',
          "amount": 26
        },
        {
          "location": 'Taman Gee Huat',
          "amount": 29
        },
        {
          "location": 'Taman Paramount',
          "amount": 26
        },
        {
          "location": 'Asia Jaya',
          "amount": 65
        }
      ];
      
      // Create axes
      let categoryAxis = this.chartTrend.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "location";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;
      
      let  valueAxis = this.chartTrend.xAxes.push(new am4charts.ValueAxis()); 
      valueAxis.renderer.opposite = true;

      let series = this.chartTrend.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = "amount";
      series.dataFields.categoryY = "location";
      series.name = name;
      series.columns.template.tooltipText = "Amount: [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;

      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX}";
      valueLabel.label.horizontalCenter = "left";
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;

      let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    })
  }

  initChartCategory() {
    this.zone.runOutsideAngular(() => {
      this.chartCategory = am4core.create("categorydiv", am4charts.XYChart);

      // Add data
      this.chartCategory.data = [{
        "category": "Energy",
        "value": 3025
      }, {
        "category": "Waste",
        "value": 1882
      }, {
        "category": "Water",
        "value": 1809
      }, {
        "category": "Transportation",
        "value": 1322
      }, {
        "category": "Biodiversity",
        "value": 1122
      }];

      // Create axes

      let categoryAxis = this.chartCategory.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
        if (target.dataItem && target.dataItem.index && 2 == 2) {
          return dy + 25;
        }
        return dy;
      });

      let valueAxis = this.chartCategory.yAxes.push(new am4charts.ValueAxis());

      // Create series
      let series = this.chartCategory.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "category";
      series.name = "Value";
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;

      let columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;
    })

  }

  initChartApp() {
    this.zone.runOutsideAngular(() => {
      this.chartApp = am4core.create("appdiv", am4charts.XYChart);
      this.chartApp.paddingRight = 20;

      let data = [{
        "year": "2011",
        "value": 100
      }, {
        "year": "2012",
        "value": 200
      }, {
        "year": "2013",
        "value": 300
      }, {
        "year": "2014",
        "value": 250
      }, {
        "year": "2015",
        "value": 500
      }, {
        "year": "2016",
        "value": 800
      }, {
        "year": "2017",
        "value": 750
      }, {
        "year": "2018",
        "value": 879
      }, {
        "year": "2019",
        "value": 1250
      }];

      this.chartApp.data = data;
      this.chartApp.dateFormatter.inputDateFormat = "yyyy";

      let dateAxis = this.chartApp.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;
      dateAxis.baseInterval = { timeUnit: "year", count: 1 };

      let valueAxis = this.chartApp.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      let series = this.chartApp.series.push(new am4charts.StepLineSeries());
      series.dataFields.dateX = "year";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";
      series.strokeWidth = 3;

      this.chartApp.cursor = new am4charts.XYCursor();
      this.chartApp.cursor.xAxis = dateAxis;
      this.chartApp.cursor.fullWidthLineX = true;
      this.chartApp.cursor.lineX.strokeWidth = 0;
      this.chartApp.cursor.lineX.fill = this.chartApp.colors.getIndex(2);
      this.chartApp.cursor.lineX.fillOpacity = 0.1;

      this.chartApp.scrollbarX = new am4core.Scrollbar();
    })
  }

  initChartEnergy() {

    this.zone.runOutsideAngular(() => {
      this.chartEnergy = am4core.create("chartenergy", am4charts.PieChart);
      // Add data
      this.chartEnergy.data = [ {
        "aspect": "A1",
        "amount": 501
      }, {
        "aspect": "A2",
        "amount": 301
      }, {
        "aspect": "A3",
        "amount": 201
      }, {
        "aspect": "A4",
        "amount": 165
      }, {
        "aspect": "A5",
        "amount": 139
      }, {
        "aspect": "A6",
        "amount": 195
      } ];

      // Add and configure Series
      let pieSeries = this.chartEnergy.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "aspect";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.radius = am4core.percent(65)

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
  }

  initChartWater() {

    this.zone.runOutsideAngular(() => {
      this.chartWater = am4core.create("chartwater", am4charts.PieChart);
      // Add data
      this.chartWater.data = [ {
        "aspect": "B1",
        "amount": 51
      }, {
        "aspect": "B2",
        "amount": 31
      }, {
        "aspect": "B3",
        "amount": 21
      }, {
        "aspect": "B4",
        "amount": 15
      }, {
        "aspect": "B5",
        "amount": 19
      } ];

      // Add and configure Series
      let pieSeries = this.chartWater.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "aspect";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.radius = am4core.percent(65)

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
  }

  initChartTransportation() {

    this.zone.runOutsideAngular(() => {
      this.chartTransportation = am4core.create("charttransportation", am4charts.PieChart);
      // Add data
      this.chartTransportation.data = [ {
        "aspect": "D1",
        "amount": 51
      }, {
        "aspect": "D2",
        "amount": 31
      } ];

      // Add and configure Series
      let pieSeries = this.chartTransportation.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "aspect";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.radius = am4core.percent(65)

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
  }

  initChartWaste() {

    this.zone.runOutsideAngular(() => {
      this.chartWaste = am4core.create("chartwaste", am4charts.PieChart);
      // Add data
      this.chartWaste.data = [ {
        "aspect": "C1",
        "amount": 41
      }, {
        "aspect": "C2",
        "amount": 31
      }, {
        "aspect": "C3",
        "amount": 61
      }, {
        "aspect": "C4",
        "amount": 26
      }
     ];

      // Add and configure Series
      let pieSeries = this.chartWaste.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "aspect";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.radius = am4core.percent(65)

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
    
  }

  initChartBiodiversity() {

    this.zone.runOutsideAngular(() => {
      this.chartWaste = am4core.create("chartbiodiversity", am4charts.PieChart);
      // Add data
      this.chartWaste.data = [ {
        "aspect": "E1",
        "amount": 41
      }, {
        "aspect": "E2",
        "amount": 31
      }, {
        "aspect": "E3",
        "amount": 61
      }
     ];

      // Add and configure Series
      let pieSeries = this.chartWaste.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "aspect";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.radius = am4core.percent(95)

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
    
  }

  doExport() {
    console.log('masuk')
    this.successfulToastr()
  }

  successfulToastr() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Exporting</span> <span data-notify="message">Your download will begin shortly</span></div>',
      '',
      {
        timeOut: 2000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-right',
        toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
  }

  createReport() {
    this.reportService.doCreateReport().subscribe()
    https://sfo2.digitaloceanspaces.com/motion-api/GHG_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DA5VG5FZZV6HKNPES2TD%2F20200303%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20200303T061154Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ceba1a0dfed08e5cc59cfb90a5c8338b2d6208002d43eab32b880087c7bc84d9
    let url = 'https://sfo2.digitaloceanspaces.com/motion-api/GHG_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DA5VG5FZZV6HKNPES2TD%2F20200401%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20200401T053023Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6773ffce95f5bd00116d2b9d9e94fa7ea9532fac6e84c487c923c28648f4432a'
    window.open(url)
  }

}
