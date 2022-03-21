import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { ToastrService } from "ngx-toastr";
import swal from "sweetalert2";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { map, tap, catchError } from "rxjs/operators";

import {
  Application,
  MergedApplication,
} from "src/app/shared/services/applications/applications.model";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { NotificationsService } from "src/app/shared/services/notifications/notifications.service";
import { House } from "src/app/shared/services/houses/houses.model";
import { HousesService } from "src/app/shared/services/houses/houses.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { User } from "src/app/shared/services/auth/auth.model";
import { UsersService } from "src/app/shared/services/users/users.service";
import { environment } from "src/environments/environment";


import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"],
})
export class ApplicationsComponent implements OnInit, OnDestroy {
  public tempApplications: Application[] = [];
  public tempHouses: House[] = [];
  public tempUsers: User[] = [];
  public mergedApplications: MergedApplication[] = [];


  applicationCM;
  applicationCR;
  applicationIE;
  applicationIP;
  applicationPD;
  applicationRJ;
  applicationSM;

  // Applications toggle
  isApplicationEnabled: boolean;
  isApplicationEnabledId: string;

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  // Date
  today;

  // year
  yearlist = [];

  public pieChart;

  constructor(
    private zone: NgZone,
    private applicationService: ApplicationsService,
    private houseService: HousesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private notificationService: NotificationsService,
    private notifyService: NotifyService,
    public toastr: ToastrService,
    public router: Router,
  ) {
    this.getData();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.today = yyyy + '-' + mm + '-' + dd;
  }

  ngOnInit() {
    this.applicationService.doRetrieveAllApplications().subscribe(
      (application) => {
        this.applicationCM = application.filter((obj) => {
          return obj.status == "CM";
        });
        this.applicationCR = application.filter((obj) => {
          return obj.status == "CR";
        });
        this.applicationIE = application.filter((obj) => {
          return obj.status == "IE";
        });
        this.applicationIP = application.filter((obj) => {
          return obj.status == "IP";
        });
        this.applicationPD = application.filter((obj) => {
          return obj.status == "PD";
        });
        this.applicationRJ = application.filter((obj) => {
          return obj.status == "RJ";
        });
        this.applicationSM = application.filter((obj) => {
          return obj.status == "SM";
        });
      },
      (err) => {
        console.error("err", err);
      },
      () => {
        this.initChart();
      }
    );

    this.populateYearList()
    this.getApplicationStatus();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.pieChart) {
        this.pieChart.dispose();
      }
    });
  }

  mergeData() {
    this.mergedApplications = [];
    this.applicationService.doRetrieveAllApplications().pipe(map(x => x.filter(i => i.status != "DF"))).subscribe(
      (resApp) => {
        this.tempApplications = resApp;
      },
      (err) => {
        console.error("err", err);
      },
      () => {
        this.houseService.getAll().subscribe(
          (resHouse) => {
            this.tempHouses = resHouse;
          },
          (err) => {
            console.error("err", err);
          },
          () => {
            this.userService.getAll().subscribe(
              (resUser) => {
                this.tempUsers = resUser;
              },
              (err) => {
                console.error("err", err);
              },
              () => {
                let mergerCounter: number = 0;
                // console.log('1: ', this.tempApplications)
                // console.log('2: ', this.tempHouses)
                // console.log('3: ', this.tempUsers)

                this.tempApplications.forEach((application: Application) => {
                  this.tempHouses.forEach((house: House) => {
                    if (house.id == application.applied_house) {
                      this.tempUsers.forEach((applicant: User) => {
                        if (applicant.id == application.applicant) {
                          if (application.evaluator_nominated) {
                            this.tempUsers.forEach((evaluator: User) => {
                              if (
                                evaluator.id == application.evaluator_nominated
                              ) {
                                this.mergedApplications.push({
                                  id: application.id,
                                  applicant_id: application.applicant,
                                  applicant_name: applicant.full_name,
                                  evaluator_nominated_id:
                                    application.evaluator_nominated,
                                  evaluator_nominated_name: evaluator.full_name,
                                  applied_house_id: application.applied_house,
                                  applied_house_assessment_tax_account:
                                    house.assessment_tax_account,
                                  status: application.status,
                                  date_submitted: moment(
                                    application.date_submitted,
                                    "YYYY-MM-DD"
                                  ).format("DD/MM/YYYY"),
                                });
                              }
                            });
                          } else {
                            this.mergedApplications.push({
                              id: application.id,
                              applicant_id: application.applicant,
                              applicant_name: applicant.full_name,
                              evaluator_nominated_id:
                                application.evaluator_nominated,
                              evaluator_nominated_name: "Not assigned",
                              applied_house_id: application.applied_house,
                              applied_house_assessment_tax_account:
                                house.assessment_tax_account,
                              status: application.status,
                              date_submitted: moment(
                                application.date_submitted,
                                "YYYY-MM-DD"
                              ).format("DD/MM/YYYY"),
                            });
                          }
                        }
                      });
                    }
                  });
                  mergerCounter++;
                  if (mergerCounter === this.tempApplications.length) {
                    this.tableRows = this.mergedApplications;
                    this.tableTemp = this.tableRows.map((prop, key) => {
                      return {
                        ...prop,
                        no: key + 1,
                      };
                    });
                  }
                });
              }
            );
          }
        );
      }
    );
  }

  getData() {
    this.loadingBar.start();
    this.applicationService.doRetrieveAllApplications().subscribe(
      () => {},
      () => {
        this.loadingBar.complete();
      },
      () => {
        this.mergeData();
        this.loadingBar.complete();
      }
    );
    this.userService.getAll().subscribe(
      () => {},
      () => {},
      () => {}
    );
    this.houseService.getAll().subscribe(
      () => {},
      () => {},
      () => {}
    );
  }

  initChart() {
    // Create chart
    this.pieChart = am4core.create("chartdiv", am4charts.PieChart);
    this.pieChart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    this.pieChart.align = "center";
    this.pieChart.width = am4core.percent(50);
    this.pieChart.fontSize = "10";
    this.pieChart.data = [
      {
        country: "Completed",
        value: this.applicationCM ? this.applicationCM.length : 0,
        // color: am4core.color("#28b463")
      },
      {
        country: "Created",
        value: this.applicationCR ? this.applicationCR.length : 0,
        // color: am4core.color("#28b463")
      },
      // {
      //   country: "In Progress",
      //   value: this.applicationIP ? this.applicationIP.length : 0,
      //   // color: am4core.color("#28b463")
      // },
      // {
      //   country: "Paid",
      //   value: this.applicationPD ? this.applicationPD.length : 0,
      //   // color: am4core.color("#28b463")
      // },
      {
        country: "Rejected",
        value: this.applicationRJ ? this.applicationRJ.length : 0,
        // color: am4core.color("#a93226")
      },
      {
        country: "In Evaluation",
        value: this.applicationIE ? this.applicationIE.length : 0,
        // color: am4core.color("#f1c40f")
      },
      {
        country: "Submitted",
        value: this.applicationSM ? this.applicationSM.length : 0,
        // color: am4core.color("#2471a3")
      },
    ];

    let series = this.pieChart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;
    series.slices.template.propertyFields.fill = "color";

    series.hiddenState.properties.endAngle = -90;

    this.pieChart.legend = new am4charts.Legend();
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  entriesChangeStatus($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d["status"].indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });

  }

  entriesChangeYear($event) {
    let val = $event.target.value;
    console.log("A", val);
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d["date_submitted"].slice(6,10) >= val && d["date_submitted"].slice(6,10) < +val+1) {
          return true;

        };
        //if (d["date_submitted"].slice(7,10) >= val) {
        //  return true;
        //}
        
        //if (d["date_submitted"].indexOf(val) !== -1) {
        //  return true;
        //}
      }
      return false;
    });

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

  viewDetail(selectedApplication) {
    // this.router.navigate(["/applications/details"], selectedApplication);
    this.router.navigate(["/applications/details"], {
      queryParams: { application_id: selectedApplication.id },
    });
  }

  deleteApplication(row) {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false,
      })
      .then((result) => {
        this.loadingBar.start();
        if (result.value) {
          this.applicationService.doDeleteScript(row.id).subscribe(
            () => {
              this.sendDeleteNotification(row);
              this.loadingBar.complete();
              this.successMessage("delete");
            },
            () => {
              this.loadingBar.complete();
            },
            () => {
              this.getData();
            }
          );
        }
      });
  }

  successMessage(type: string) {
    if (type == "register") {
      let title = "Success";
      let message = "Application is registered";
      this.notifyService.openToastr(title, message);
    } else if (type == "update") {
      let title = "Success";
      let message = "Application is updated";
      this.notifyService.openToastr(title, message);
    } else if (type == "delete") {
      let title = "Success";
      let message = "Application is deleted";
      this.notifyService.openToastr(title, message);
    }
  }

  sendDeleteNotification(row) {

    this.houseService.filter(`id=${row.applied_house_id}`).subscribe(
      (res) => {
        let body = {
          'title': 'Deleted',
          'message': `Your application for house: ${res[0].address} and tax number: ${res[0].assessment_tax_account} has been deleted by admin`,
          'date_sent': this.today,
          'to_user': row.applicant_id
    
        };
    
        this.notificationService.register(body).subscribe(
          (res) => {
            //console.log("delete notification server - success", res);
          },
          (err) => {
            //console.log("delete notification server - error", err);
          }
        );
      }
    );
    
  }

  populateYearList() {
    var currentYear= new Date().getFullYear(); 
    let range = currentYear - 2011;
    for(let i=0; 2011 + i<currentYear + 1; i++) {
      let j = 2011 + i;
      this.yearlist.push(j);
    }
    console.log("YL", this.yearlist);
    
  }

  toggleApplication(state) {
    this.isApplicationEnabled = state;
    this.applicationService.doUpdateApplicationStatus(this.isApplicationEnabledId, {"enable_application": state}).subscribe(
      ()=> {},
      ()=> {},
      ()=> {}
    )
  }

  getApplicationStatus() {
    this.applicationService.doGetApplicationStatus().subscribe(
      (res) => {
        this.isApplicationEnabled = res['0']['enable_application']
        this.isApplicationEnabledId = res['0']['id']
      },
      (err) => {

      }
    );
  }
  generateEXCEL() {
    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tableTemp);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "Laporan Tahunan");
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '_exported'+ '.xlsx');
  }

  generatePDF() {
    window.open(environment.baseUrl + "v1/reports/report_yearly/");
  }

  resetButton() {
    window.location.reload();
  }

  
}
