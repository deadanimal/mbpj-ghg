import { Component, OnInit, TemplateRef, NgZone } from "@angular/core";
import { FormArray, FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";

import { User } from "src/app/shared/services/users/users.model";
import { UsersService } from "src/app/shared/services/users/users.service";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { ApplicationAssessmentsService } from "src/app/shared/services/application-assessments/application-assessments.service";
import { AssessmentAspectsService } from "src/app/shared/services/assessment-aspects/assessment-aspects.service";
import { CarbonEmissionFactorsService } from "src/app/shared/services/carbon-emission-factors/carbon-emission-factors.service";
import { EvaluationsService } from "src/app/shared/services/evaluations/evaluations.service";
import { EvaluationSchedulesService } from "src/app/shared/services/evaluation-schedules/evaluation-schedules.service";
import { RebatesService } from "src/app/shared/services/rebates/rebates.service";
import { HousesService } from "src/app/shared/services/houses/houses.service";
import { NotificationsService } from "src/app/shared/services/notifications/notifications.service";

import * as moment from "moment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import { Application } from "src/app/shared/services/applications/applications.model";
import { ApplicationAssessment } from "src/app/shared/services/application-assessments/application-assessments.model";
import { AssessmentAspect } from "src/app/shared/services/assessment-aspects/assessment-aspects.model";
import { House } from "src/app/shared/services/houses/houses.model";
import { Evaluation } from "src/app/shared/services/evaluations/evaluations.model";
import { EvaluationSchedule } from "src/app/shared/services/evaluation-schedules/evaluation-schedules.model";

/**
 * ------- Tile layer list
 *
 * Open Street Map - > http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
 * Open Cycle Map -> http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
 * Google Traffic -> https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}
 * Google Street -> http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}
 * Google Hybrid -> http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}
 * Google Satellite -> http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
 * Google Terrain -> http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}
 *
 **/

@Component({
  selector: "app-application-details",
  templateUrl: "./application-details.component.html",
  styleUrls: ["./application-details.component.scss"],
})
export class ApplicationDetailsComponent implements OnInit {
  public electriccarbon: number = 0;
  public watercarbon: number = 0;
  public tempApplication: Application;
  public tempApplicant: User;
  public tempApplicationAssessment: ApplicationAssessment[] = [];
  public tempAssessmentAspect: AssessmentAspect[] = [];
  public tempHouse: House;
  public tempEvaluator: User;
  public tempEvaluatorList: User[] = [];
  public tempEvaluation: Evaluation[] = [];
  public tempEvaluationSchedule: EvaluationSchedule;
  public statusApproveReject = ["Completed", "Rejected", "Paid"];

  aspectTypes = [
    {
      value: "EN",
      display_name: "Energy",
    },
    {
      value: "WA",
      display_name: "Water",
    },
    {
      value: "TR",
      display_name: "Transportation",
    },
    {
      value: "BI",
      display_name: "Biodiversity",
    },
    {
      value: "WE",
      display_name: "Waste",
    },
  ];

  evaluatorForm = new FormGroup({
    evaluator_nominated: new FormControl(""),
    status: new FormControl(""),
  });

  scheduleForm = new FormGroup({
    date: new FormControl(""),
    session: new FormControl(""),
    application: new FormControl(""),
  });

  rebateForm = new FormGroup({
    amount_approved: new FormControl(""),
    application_id: new FormControl(""),
    payment_date: new FormControl(""),
  });

  statusForm = new FormGroup({
    status: new FormControl(""),
  });

  evaluationFormArray = new FormArray([]);
  totalAll: number = 0;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  datePickerValue;
  datePickerConfig = {
    isAnimated: true,
    containerClass: "theme-dark-blue",
    dateInputFormat: "YYYY-MM-DD",
  };

  public isEdit: boolean = false;

  constructor(
    private applicationService: ApplicationsService,
    private applicationAssessmentService: ApplicationAssessmentsService,
    private assessmentAspectService: AssessmentAspectsService,
    private carbonemissionfactorService: CarbonEmissionFactorsService,
    private evaluationService: EvaluationsService,
    private evaluationScheduleService: EvaluationSchedulesService,
    private houseService: HousesService,
    private userService: UsersService,
    private rebateService: RebatesService,
    private notificationService: NotificationsService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrService,
    public zone: NgZone,
    public loadingBar: LoadingBarService
  ) {
    // this.tempApplication = this.router.getCurrentNavigation().extras;
    this.route.queryParamMap.subscribe((params) => {
      let obj = { ...params.keys, ...params };
      if (obj["params"].application_id) {
        this.applicationService
          .retrieveFilteredApplications("id=" + obj["params"].application_id)
          .subscribe(
            (res) => {
              // console.log("res", res);
              this.tempApplication = res[0];
              this.initData();
            },
            (err) => {
              console.error("err", err);
            }
          );
      }
    });
  }

  ngOnInit() {}

  initEvaluation() {
    return new FormGroup({
      id: new FormControl(""),
      equipment: new FormControl(0),
      system: new FormControl(0),
      efficiency: new FormControl(0),
      remarks: new FormControl(""),
      application_assessment: new FormControl(""),
      assessment_aspect_name: new FormControl(""),
      incentive: new FormControl(0),
      total_evaluation: new FormControl(0),
    });
  }

  initData() {
    this.assessmentAspectService
      .doRetrieveAllAssessmentAspects()
      .subscribe((assessment_aspect) => {
        this.tempAssessmentAspect = assessment_aspect;
      });

    if (this.tempApplication.status == "CM") {
      this.tempApplication.status = "Completed";
    } else if (this.tempApplication.status == "CR") {
      this.tempApplication.status = "Created";
    } else if (this.tempApplication.status == "IE") {
      this.tempApplication.status = "In Evaluation";
    } else if (this.tempApplication.status == "IP") {
      this.tempApplication.status = "In Progress";
    } else if (this.tempApplication.status == "NA") {
      this.tempApplication.status = "Not available";
    } else if (this.tempApplication.status == "PD") {
      this.tempApplication.status = "Paid";
    } else if (this.tempApplication.status == "RJ") {
      this.tempApplication.status = "Rejected";
    } else if (this.tempApplication.status == "SM") {
      this.tempApplication.status = "Submitted";
    }

    this.houseService
      .filter("id=" + this.tempApplication.applied_house)
      .subscribe(
        (res) => {
          // console.log("res", res);
          this.tempHouse = res[0];
          if (this.tempHouse.building_type == "CD") {
            this.tempHouse.building_type = "Condominium";
          } else if (this.tempHouse.building_type == "FL") {
            this.tempHouse.building_type = "Flat";
          } else if (this.tempHouse.building_type == "TO") {
            this.tempHouse.building_type = "Townhouse";
          } else if (this.tempHouse.building_type == "TE") {
            this.tempHouse.building_type = "Terrace House";
          } else if (this.tempHouse.building_type == "BS") {
            this.tempHouse.building_type = "Bungalow / Semidetached";
          } else if (this.tempHouse.building_type == "AS") {
            this.tempHouse.building_type = "Apartment / Service Apartment";
          } else if (this.tempHouse.building_type == "OT") {
            this.tempHouse.building_type = "Other";
          }
        },
        (err) => {
          console.error("err", err);
        },
        () => {
          let year = this.tempApplication.date_submitted.substring(0, 4);
          this.carbonemissionfactorService
            .doRetrieveFilteredCarbonEmissionFactors("year=" + year)
            .subscribe(
              (res) => {
                // console.log("res", res);
                // to calculate electric carbon emission factor for this application
                let electric_sum_bill =
                  this.tempHouse.electricity_bill_1_usage +
                  this.tempHouse.electricity_bill_2_usage +
                  this.tempHouse.electricity_bill_3_usage;

                this.electriccarbon =
                  (electric_sum_bill *
                    +res[0].electric_carbon_emission_factor) /
                  this.tempHouse.permanent_occupant;

                // to calculate water carbon emission factor for this application
                let water_sum_bill =
                  this.tempHouse.water_bill_1_usage +
                  this.tempHouse.water_bill_2_usage +
                  this.tempHouse.water_bill_3_usage;

                this.watercarbon =
                  (water_sum_bill * +res[0].water_carbon_emission_factor) /
                  this.tempHouse.permanent_occupant;
              },
              (err) => {
                console.error("err", err);
              }
            );
        }
      );
    this.userService.getAll().subscribe(
      (res) => {
        // console.log("res", res);
        res.forEach((user) => {
          if (user.id == this.tempApplication.applicant) {
            this.tempApplicant = user;
          }
          if (user.id == this.tempApplication.evaluator_nominated) {
            this.tempEvaluator = user;
          }
          if (user.user_type == "EV") {
            this.tempEvaluatorList.push(user);
          }
        });
      },
      (err) => {
        console.error("err", err);
      }
    );
    this.applicationAssessmentService
      .doRetrieveFilteredApplicationAssessments(
        "application=" + this.tempApplication.id
      )
      .subscribe(
        (assessment) => {
          this.tempApplicationAssessment = assessment;
        },
        (err) => {
          console.error("err", err);
        },
        () => {
          for (
            let index = 0;
            index < this.tempApplicationAssessment.length;
            index++
          ) {
            let result = this.tempAssessmentAspect.find((obj) => {
              return (
                obj.id ==
                this.tempApplicationAssessment[index].assessment_aspect
              );
            });
            this.tempApplicationAssessment[index].assessment_aspect_name =
              this.getAspectType(result.aspect_type) +
              " - " +
              result.name +
              " " +
              result.aspect +
              ` (${result.incentive}%)`;

            this.evaluationService
              .doRetrieveFilteredEvaluations(
                "application_assessment=" +
                  this.tempApplicationAssessment[index].id
              )
              .subscribe(
                (evaluation) => {
                  this.tempEvaluation.push(evaluation[0]);
                  // console.log('evaluationFormArray', this.evaluationFormArray.value[index])
                  // console.log('tempEvaluation', this.tempEvaluation)
                },
                (err) => {
                  console.error("err", err);
                },
                () => {
                  this.evaluationFormArray.push(this.initEvaluation());
                  if (this.evaluationFormArray.length > 0) {
                    let total_evaluation =
                      ((this.tempEvaluation[index].equipment +
                        this.tempEvaluation[index].system +
                        this.tempEvaluation[index].efficiency) /
                        100) *
                      result.incentive;

                    this.evaluationFormArray.at(index).patchValue({
                      ...this.tempEvaluation[index],
                      assessment_aspect_name:
                        result.name +
                        ". " +
                        this.getAspectType(result.aspect_type) +
                        " - " +
                        result.aspect +
                        ` (${result.incentive}%)`,
                      incentive: result.incentive,
                      total_evaluation,
                    });

                    this.totalAll += total_evaluation;
                  }
                }
              );
          }
        }
      );
    /* this.applicationAssessmentService.retrievedApplicationAssessments.forEach(
      (assessment) => {
        if (assessment.application == this.tempApplication.id) {
          this.tempApplicationAssessment.push(assessment)
          this.evaluationService.retrievedEvaluations.forEach(
            (evaluation) => {
              if (evaluation.application_assessment == assessment.id) {
                this.tempEvaluation.push(evaluation)
              }
              console.log('Evaluation: ', this.tempEvaluation)
            }
          )
        }
      }
    ) */
    this.evaluationScheduleService
      .doRetrieveFilteredEvaluationSchedules(
        "application=" + this.tempApplication.id
      )
      .subscribe((res) => {
        this.tempEvaluationSchedule = res[0];
      });
  }

  doOpenModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault);
  }

  doAssignEvaluator() {
    // console.log(this.evaluatorForm);
    this.scheduleForm.value.date = moment(
      new Date(this.scheduleForm.value.date)
    ).format("YYYY-MM-DD");
    this.scheduleForm.value.application = this.tempApplication.id;
    this.evaluatorForm.value.status = "IE";
    this.defaultModal.hide();
    // console.log("schedule: ", this.scheduleForm.value);
    this.applicationService
      .doAssignEvaluator(this.evaluatorForm.value, this.tempApplication.id)
      .subscribe(
        () => {
          this.successfulRegisterEvaluatorMessage();

          this.evaluationScheduleService
            .doCreateEvaluationSchedule(this.scheduleForm.value)
            .subscribe(
              () => {
                this.successfulRegisterEvaluatorScheduleMessage();
              },
              () => {
                this.unsuccessfulRegisterEvaluatorScheduleMessage();
              },
              () => {
                this.refreshData();
              }
            );

          let session = "";
          if (this.scheduleForm.value.session == "AM") session = "Morning";
          else if (this.scheduleForm.value.session == "PM") session = "Evening";

          // send notification IE to evaluator
          let body = {
            title: "Assign",
            message: `You has been nominated for application ${this.tempHouse.assessment_tax_account} schedule on ${this.scheduleForm.value.date} (${session}) slot`,
            to_user: this.evaluatorForm.value.evaluator_nominated,
            date_sent: moment().format("YYYY-MM-DD"),
          };
          this.notificationService.register(body).subscribe(
            (res) => {
              // console.log("res", res);
            },
            (err) => {
              console.error("err", err);
            }
          );

          // send notification IE to applicant
          let badan = {
            title: "In Evaluation",
            message: `Mr/Mrs have been nominated to evaluate your application. Schedule on ${this.scheduleForm.value.date} (${session}) slot. Make sure you are prepared for evaluation purposes.`,
            to_user: this.tempApplicant.id,
            date_sent: moment().format("YYYY-MM-DD"),
          };
          this.notificationService.register(badan).subscribe(
            (res) => {
              // console.log("res", res);
            },
            (err) => {
              console.error("err", err);
            }
          );
        },
        () => {
          this.unsuccessfulRegisterEvaluatorMessage();
        },
        () => {}
      );
  }

  getAspectType(value: string) {
    let result = this.aspectTypes.find((obj) => {
      return obj.value == value;
    });
    return result.display_name;
  }

  editEvaluation() {
    this.isEdit = true;
  }

  submitApprovedRebate() {
    this.rebateForm.value.application_id = this.tempApplication.id;
    this.rebateForm.value.payment_date = moment().format("YYYY-MM-DD");
    this.statusForm.value.status = "CM";
    this.defaultModal.hide();
    this.loadingBar.start();
    this.rebateService.doCreateRebate(this.rebateForm.value).subscribe(
      () => {
        this.loadingBar.complete();

        // send notification CM to evaluator
        let body = {
          title: "Completed",
          message: `Your evaluation for application ${this.tempHouse.assessment_tax_account} has been completed`,
          to_user: this.tempEvaluator.id,
          date_sent: moment().format("YYYY-MM-DD"),
        };
        this.notificationService.register(body).subscribe(
          (res) => {
            // console.log("res", res);
          },
          (err) => {
            console.error("err", err);
          }
        );

        // send notification CM to applicant
        let badan = {
          title: "Completed",
          message: `Your application has been approved. Please contact us at email adminrebat@mbpj.gov.my for more details.`,
          to_user: this.tempApplicant.id,
          date_sent: moment().format("YYYY-MM-DD"),
        };
        this.notificationService.register(badan).subscribe(
          (res) => {
            // console.log("res", res);
          },
          (err) => {
            console.error("err", err);
          }
        );

        this.successfulApproveRebateMessage();
        this.applicationService
          .doChangeStatus(this.statusForm.value, this.tempApplication.id)
          .subscribe(
            () => {},
            () => {},
            () => {
              this.refreshData();
            }
          );
      },
      () => {
        this.loadingBar.complete();
      },
      () => {}
    );
  }

  submitRejectRebate() {
    this.statusForm.value.status = "RJ";
    this.defaultModal.hide();
    this.loadingBar.start();
    this.applicationService
      .doChangeStatus(this.statusForm.value, this.tempApplication.id)
      .subscribe(
        () => {
          this.loadingBar.complete();

          // send notification RJ to evaluator
          let body = {
            title: "Rejected",
            message: `Your evaluation for application ${this.tempHouse.assessment_tax_account} has been rejected`,
            to_user: this.tempEvaluator.id,
            date_sent: moment().format("YYYY-MM-DD"),
          };
          this.notificationService.register(body).subscribe(
            (res) => {
              // console.log("res", res);
            },
            (err) => {
              console.error("err", err);
            }
          );

          // send notification RJ to applicant
          let badan = {
            title: "Rejected",
            message: `Your application has been rejected. Please contact us at email adminrebat@mbpj.gov.my for more details.`,
            to_user: this.tempApplicant.id,
            date_sent: moment().format("YYYY-MM-DD"),
          };
          this.notificationService.register(badan).subscribe(
            (res) => {
              // console.log("res", res);
            },
            (err) => {
              console.error("err", err);
            }
          );
        },
        () => {
          this.loadingBar.complete();
        },
        () => {
          this.successfulRejectRebateMessage();
          this.refreshData();
        }
      );
  }

  submitEditEvaluation() {
    // console.log('submitEditEvaluation', this.evaluationFormArray)
    this.evaluationFormArray.controls.forEach((formarray) => {
      this.evaluationService
        .doUpdateEvaluation(formarray.value, formarray.value.id)
        .subscribe(
          (res) => {
            // console.log("res", res);
          },
          (err) => {
            console.error("err", err);
          }
        );
    });
    this.isEdit = false;
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Evaluation score edit successfully submited</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
  }

  refreshData() {
    this.loadingBar.start();
    this.applicationService.doRetrieveAllApplications().subscribe(
      () => {
        this.loadingBar.complete();
      },
      () => {
        this.loadingBar.complete();
      },
      () => {
        this.initData();
      }
    );
    this.houseService.getAll().subscribe(
      () => {},
      () => {},
      () => {}
    );
    this.evaluationScheduleService.doRetrieveAllEvaluationSchedules().subscribe(
      () => {},
      () => {},
      () => {}
    );
    this.evaluationService.doRetrieveAllEvaluations().subscribe(
      () => {},
      () => {},
      () => {}
    );
    this.applicationAssessmentService
      .doRetrieveAllApplicationAssessments()
      .subscribe(
        () => {},
        () => {},
        () => {}
      );
  }

  successfulRegisterEvaluatorMessage() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Evaluator is successfully nominated</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
  }

  unsuccessfulRegisterEvaluatorMessage() {
    this.toastr.show(
      '<span class="alert-icon fas fa-exclamation-triangle"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Unsuccessful</span> <span data-notify="message">Please try again</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-danger alert-notify",
      }
    );
  }

  successfulRegisterEvaluatorScheduleMessage() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Evaluation date is set</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
  }

  unsuccessfulRegisterEvaluatorScheduleMessage() {
    this.toastr.show(
      '<span class="alert-icon fas fa-exclamation-triangle"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Unsuccessful</span> <span data-notify="message">Please try again</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-danger alert-notify",
      }
    );
  }

  successfulApproveRebateMessage() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Application is successfully approved</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
    this.defaultModal.hide();
  }

  successfulRejectRebateMessage() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Applicant is successfully rejected</span></div>',
      "",
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
    this.defaultModal.hide();
  }

  getAssessmentAspect(assessment_aspect_id) {
    let result = this.tempAssessmentAspect.find((obj) => {
      return obj.id == assessment_aspect_id;
    });
    return result.name + ". " + result.aspect;
  }
}
