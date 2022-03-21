import { Component, OnInit, NgZone } from "@angular/core";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { environment } from "src/environments/environment";
import { ToastrService } from "ngx-toastr";

import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { ApplicationAssessmentsService } from "src/app/shared/services/application-assessments/application-assessments.service";
import { ReportsService } from "src/app/shared/services/reports/reports.service";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import * as moment from "moment";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  // Data
  reportType: string = "";
  yearTotalRebateApprovalAnalysis: string = new Date().getFullYear().toString();
  yearTrendAnalysis: string = new Date().getFullYear().toString();
  yearApplicationbyCategoryAnalysis: string = new Date()
    .getFullYear()
    .toString();
  yearEnergyAssessmentAnalysis: string = new Date().getFullYear().toString();
  yearWaterAssessmentAnalysis: string = new Date().getFullYear().toString();
  yearTransportationAssessmentAnalysis: string = new Date()
    .getFullYear()
    .toString();
  yearBiodiversityAssessmentAnalysis: string = new Date()
    .getFullYear()
    .toString();
  yearWasteAssessmentAnalysis: string = new Date().getFullYear().toString();

  // DatePicker
  startDate;
  endDate;
  datePickerConfig = {
    isAnimated: true,
    containerClass: "theme-dark-blue",
    dateInputFormat: "YYYY-MM-DD",
  };

  // Dropdown
  year2011tocurrentyear = [];

  public chartStatus;
  public chartTrend;
  public chartCategory;
  public chartApp;
  public chartEnergy;
  public chartWater;
  public chartTransportation;
  public chartBiodiversity;
  public chartWaste;

  constructor(
    public zone: NgZone,
    public loadingBar: LoadingBarService,
    public toastr: ToastrService,
    private applicationService: ApplicationsService,
    private applicationassessmentService: ApplicationAssessmentsService,
    private reportService: ReportsService
  ) {
    // loop through data from 2011 to 2021
    let currentyear = new Date().getFullYear();
    let loop = currentyear - 2011;
    for (let i = 0; i < loop + 1; i++) {
      let obj = {
        value: 2011 + i,
        display_name: (2011 + i).toString(),
      };
      this.year2011tocurrentyear.push(obj);
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.findCategory();
      this.findStatus();
      this.findTrend();
      this.findApp();
      this.findEnergy();
      this.findWater();
      this.findTransportation();
      this.findWaste();
      this.findBiodiversity();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartCategory) this.chartCategory.dispose();
      if (this.chartStatus) this.chartStatus.dispose();
      if (this.chartTrend) this.chartTrend.dispose();
      if (this.chartApp) this.chartApp.dispose();
      if (this.chartEnergy) this.chartEnergy.dispose();
      if (this.chartWater) this.chartWater.dispose();
      if (this.chartTransportation) this.chartTransportation.dispose();
      if (this.chartWaste) this.chartWaste.dispose();
      if (this.chartBiodiversity) this.chartBiodiversity.dispose();
    });
  }

  findStatus() {
    if (this.chartStatus) this.chartStatus.dispose();
    let body = {
      year: this.yearTotalRebateApprovalAnalysis,
    };
    this.applicationService
      .doRetrieveTotalRebateApprovalAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          this.initChartStatus(res);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartStatus(chartData) {
    this.chartStatus = am4core.create("statusdiv", am4charts.PieChart);

    // Add data
    this.chartStatus.data = chartData;

    // Add and configure Series
    let pieSeries = this.chartStatus.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "status";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.radius = am4core.percent(60);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chartStatus.exporting.menu = new am4core.ExportMenu();
    this.chartStatus.exporting.menu.align = "right";
    this.chartStatus.exporting.menu.verticalAlign = "top";
    this.chartStatus.exporting.filePrefix = "Total_Rebate_Approval_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findTrend() {
    if (this.chartTrend) this.chartTrend.dispose();
    let body = {
      year: this.yearTrendAnalysis,
    };
    this.applicationService.doRetrieveTrendAnalysis(body).subscribe(
      (res) => {
        // console.log("res", res);
        this.initChartTrend(res);
      },
      (err) => {
        console.error("err", err);
      }
    );
  }

  initChartTrend(chartData) {
    this.chartTrend = am4core.create("trenddiv", am4charts.XYChart);
    this.chartTrend.data = chartData;

    // Create axes
    let categoryAxis = this.chartTrend.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "location";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.minGridDistance = 10;

    let valueAxis = this.chartTrend.xAxes.push(new am4charts.ValueAxis());
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

    this.chartTrend.exporting.menu = new am4core.ExportMenu();
    this.chartTrend.exporting.menu.align = "right";
    this.chartTrend.exporting.menu.verticalAlign = "top";
    this.chartTrend.exporting.filePrefix = "Trend_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findCategory() {
    if (this.chartCategory) this.chartCategory.dispose();
    let body = {
      year: this.yearApplicationbyCategoryAnalysis,
    };
    this.applicationassessmentService
      .doRetrieveApplicationbyCategoryAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          this.initChartCategory(res);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartCategoryAnalysis(chartData) {
    this.chartCategory = am4core.create("appdiv", am4charts.XYChart);

    // Add data
    this.chartCategory.data = chartData;

    // Create axes

    let categoryAxis = this.chartCategory.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if (target.dataItem && target.dataItem.index && 2 == 2) {
          return dy + 25;
        }
        return dy;
      }
    );

    let valueAxis = this.chartCategory.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = this.chartCategory.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.name = "Value";
    series.columns.template.tooltipText = "{year}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chartCategory.scrollbarX = new am4core.Scrollbar();

    this.chartCategory.exporting.menu = new am4core.ExportMenu();
    this.chartCategory.exporting.menu.align = "right";
    this.chartCategory.exporting.menu.verticalAlign = "top";
    this.chartCategory.exporting.filePrefix = "Total_Application_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }


  initChartCategory(chartData) {
    this.chartCategory = am4core.create("categorydiv", am4charts.XYChart);

    // Add data
    this.chartCategory.data = chartData;

    // Create axes

    let categoryAxis = this.chartCategory.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if (target.dataItem && target.dataItem.index && 2 == 2) {
          return dy + 25;
        }
        return dy;
      }
    );

    let valueAxis = this.chartCategory.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = this.chartCategory.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.name = "Value";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chartCategory.scrollbarX = new am4core.Scrollbar();

    this.chartCategory.exporting.menu = new am4core.ExportMenu();
    this.chartCategory.exporting.menu.align = "right";
    this.chartCategory.exporting.menu.verticalAlign = "top";
    this.chartCategory.exporting.filePrefix = "Application_by_Category_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findApp() {
    if (this.chartApp) this.chartApp.dispose();
    this.applicationService.doRetrieveTotalApplicationAnalysis().subscribe(
      (res) => {
        // console.log("res", res);
        let chartData = [];
        chartData = res.map((item) => {
          return {
            year: item.year.toString(),
            value: item.value,
          };
        });
        chartData.sort((a,b)=> (a.year>b.year)?1:-1);

        this.initChartCategoryAnalysis(chartData);
      },
      (err) => {
        console.error("err", err);
      }
    );
  }

  initChartApp(chartData) {
    this.chartApp = am4core.create("appdiv", am4charts.XYChart);
    this.chartApp.paddingRight = 20;

    this.chartApp.data = chartData;
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

    this.chartApp.exporting.menu = new am4core.ExportMenu();
    this.chartApp.exporting.menu.align = "right";
    this.chartApp.exporting.menu.verticalAlign = "top";
    this.chartApp.exporting.filePrefix = "Total_Application_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findEnergy() {
    if (this.chartEnergy) this.chartEnergy.dispose();
    let body = {
      aspect_type: "EN",
      year: this.yearEnergyAssessmentAnalysis,
    };
    this.applicationassessmentService
      .doRetrieveTotalAssessmentAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          let chartData = [];
          chartData = res.map((item) => {
            return {
              aspect: item.assessment_aspect__name,
              amount: item.amount,
            };
          });
          this.initChartEnergy(chartData);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartEnergy(chartData) {
    this.chartEnergy = am4core.create("chartenergy", am4charts.PieChart);
    // Add data
    this.chartEnergy.data = chartData;

    // Add and configure Series
    let pieSeries = this.chartEnergy.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "aspect";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.radius = am4core.percent(65);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chartEnergy.exporting.menu = new am4core.ExportMenu();
    this.chartEnergy.exporting.menu.align = "right";
    this.chartEnergy.exporting.menu.verticalAlign = "top";
    this.chartEnergy.exporting.filePrefix = "Energy_Assessment_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findWater() {
    if (this.chartWater) this.chartWater.dispose();
    let body = {
      aspect_type: "WA",
      year: this.yearWaterAssessmentAnalysis,
    };
    this.applicationassessmentService
      .doRetrieveTotalAssessmentAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          let chartData = [];
          chartData = res.map((item) => {
            return {
              aspect: item.assessment_aspect__name,
              amount: item.amount,
            };
          });
          this.initChartWater(chartData);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartWater(chartData) {
    this.chartWater = am4core.create("chartwater", am4charts.PieChart);
    // Add data
    this.chartWater.data = chartData;

    // Add and configure Series
    let pieSeries = this.chartWater.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "aspect";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.radius = am4core.percent(65);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chartWater.exporting.menu = new am4core.ExportMenu();
    this.chartWater.exporting.menu.align = "right";
    this.chartWater.exporting.menu.verticalAlign = "top";
    this.chartWater.exporting.filePrefix = "Water_Assessment_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findTransportation() {
    if (this.chartTransportation) this.chartTransportation.dispose();
    let body = {
      aspect_type: "TR",
      year: this.yearTransportationAssessmentAnalysis,
    };
    this.applicationassessmentService
      .doRetrieveTotalAssessmentAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          let chartData = [];
          chartData = res.map((item) => {
            return {
              aspect: item.assessment_aspect__name,
              amount: item.amount,
            };
          });
          this.initChartTransportation(chartData);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartTransportation(chartData) {
    this.chartTransportation = am4core.create(
      "charttransportation",
      am4charts.PieChart
    );
    // Add data
    this.chartTransportation.data = chartData;

    // Add and configure Series
    let pieSeries = this.chartTransportation.series.push(
      new am4charts.PieSeries()
    );
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "aspect";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.radius = am4core.percent(65);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chartTransportation.exporting.menu = new am4core.ExportMenu();
    this.chartTransportation.exporting.menu.align = "right";
    this.chartTransportation.exporting.menu.verticalAlign = "top";
    this.chartTransportation.exporting.filePrefix = "Transportation_Assessment_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findWaste() {
    if (this.chartWaste) this.chartWaste.dispose();
    let body = {
      aspect_type: "WE",
      year: this.yearWasteAssessmentAnalysis,
    };
    this.applicationassessmentService
      .doRetrieveTotalAssessmentAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          let chartData = [];
          chartData = res.map((item) => {
            return {
              aspect: item.assessment_aspect__name,
              amount: item.amount,
            };
          });
          this.initChartWaste(chartData);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartWaste(chartData) {
    this.chartWaste = am4core.create("chartwaste", am4charts.PieChart);
    // Add data
    this.chartWaste.data = chartData;

    // Add and configure Series
    let pieSeries = this.chartWaste.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "aspect";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.radius = am4core.percent(65);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chartWaste.exporting.menu = new am4core.ExportMenu();
    this.chartWaste.exporting.menu.align = "right";
    this.chartWaste.exporting.menu.verticalAlign = "top";
    this.chartWaste.exporting.filePrefix = "Waste_Assessment_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  findBiodiversity() {
    if (this.chartBiodiversity) this.chartBiodiversity.dispose();
    let body = {
      aspect_type: "BI",
      year: this.yearBiodiversityAssessmentAnalysis,
    };
    this.applicationassessmentService
      .doRetrieveTotalAssessmentAnalysis(body)
      .subscribe(
        (res) => {
          // console.log("res", res);
          let chartData = [];
          chartData = res.map((item) => {
            return {
              aspect: item.assessment_aspect__name,
              amount: item.amount,
            };
          });
          this.initChartBiodiversity(chartData);
        },
        (err) => {
          console.error("err", err);
        }
      );
  }

  initChartBiodiversity(chartData) {
    this.chartBiodiversity = am4core.create(
      "chartbiodiversity",
      am4charts.PieChart
    );
    // Add data
    this.chartBiodiversity.data = chartData;

    // Add and configure Series
    let pieSeries = this.chartBiodiversity.series.push(
      new am4charts.PieSeries()
    );
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "aspect";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.radius = am4core.percent(95);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chartBiodiversity.exporting.menu = new am4core.ExportMenu();
    this.chartBiodiversity.exporting.menu.align = "right";
    this.chartBiodiversity.exporting.menu.verticalAlign = "top";
    this.chartBiodiversity.exporting.filePrefix = "Biodiversity_Assessment_Analysis_"+moment().format("YYYY-MM-DD_hh_mm_ss");
  }

  generateReport() {
    this.loadingBar.start();

    switch (this.reportType) {
      case "application":
        this.loadingBar.complete();
        window.open(environment.baseUrl + "v1/reports/report_application/");
        // this.reportService.getApplicationReport().subscribe(
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     // window.open(this.reportService.reportLink, "_blank");
        //   }
        // );
        break;
      case "approved":
        this.loadingBar.complete();
        window.open(environment.baseUrl + "v1/reports/report_approved/");
        // this.reportService.getApprovedReport().subscribe(
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     // window.open(this.reportService.reportLink, "_blank");
        //   }
        // );
        break;
      case "building":
        this.loadingBar.complete();
        window.open(environment.baseUrl + "v1/reports/report_building/");
        // this.reportService.getBuildingReport().subscribe(
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     // window.open(this.reportService.reportLink, "_blank");
        //   }
        // );
        break;
      case "town":
        this.loadingBar.complete();
        window.open(environment.baseUrl + "v1/reports/report_town/");
        // this.reportService.getTownReport().subscribe(
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     this.loadingBar.complete();
        //   },
        //   () => {
        //     // window.open(this.reportService.reportLink, "_blank");
        //   }
        // );
        break;
      default:
        this.loadingBar.complete();
        break;
    }
  }

  /* createReport() {
    this.reportService.doCreateReport().subscribe();
    //sfo2.digitaloceanspaces.com/motion-api/GHG_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DA5VG5FZZV6HKNPES2TD%2F20200303%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20200303T061154Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ceba1a0dfed08e5cc59cfb90a5c8338b2d6208002d43eab32b880087c7bc84d9
    https: let url =
      "https://sfo2.digitaloceanspaces.com/motion-api/GHG_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DA5VG5FZZV6HKNPES2TD%2F20200401%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20200401T053023Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6773ffce95f5bd00116d2b9d9e94fa7ea9532fac6e84c487c923c28648f4432a";
    window.open(url);
  } */
}
