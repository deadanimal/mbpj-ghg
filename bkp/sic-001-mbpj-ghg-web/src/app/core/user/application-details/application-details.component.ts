import { Component, OnInit, TemplateRef, NgZone } from "@angular/core";
import { FormArray, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";

import { User } from "src/app/shared/services/users/users.model";
import { UsersService } from "src/app/shared/services/users/users.service";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { ApplicationAssessmentsService } from "src/app/shared/services/application-assessments/application-assessments.service";
import { AssessmentAspectsService } from "src/app/shared/services/assessment-aspects/assessment-aspects.service";
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
  public tempApplication;
  public tempApplicant: User;
  public tempApplicationAssessment: ApplicationAssessment[] = [];
  public tempAssessmentAspect: AssessmentAspect[] = [];
  public tempHouse: House;
  public tempEvaluator: User;
  public tempEvaluatorList: User[] = [];
  public tempEvaluation: Evaluation[] = [];
  public tempEvaluationSchedule: EvaluationSchedule;
  public statusApproveReject = ["Completed", "Rejected", "Paid"];
  public focus;

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
    private evaluationService: EvaluationsService,
    private evaluationScheduleService: EvaluationSchedulesService,
    private houseService: HousesService,
    private userService: UsersService,
    private rebateService: RebatesService,
    private notificationService: NotificationsService,
    private modalService: BsModalService,
    private router: Router,
    public toastr: ToastrService,
    public zone: NgZone,
    public loadingBar: LoadingBarService
  ) {
    this.tempApplication = this.router.getCurrentNavigation().extras;
    console.log("tempApplication", this.tempApplication);
    this.initData();
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
    });
  }

  initData() {
    this.assessmentAspectService
      .doRetrieveAllAssessmentAspects()
      .subscribe((assessment_aspect) => {
        this.tempAssessmentAspect = assessment_aspect;
        // console.log("tempAssessmentAspect", this.tempAssessmentAspect)
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

    this.houseService.retrievedHouses.forEach((house) => {
      if (house.id == this.tempApplication.applied_house_id) {
        this.tempHouse = house;
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
        // console.log('tempHouse: ', this.tempHouse)
      }
    });
    this.userService.users.forEach((user) => {
      if (user.id == this.tempApplication.applicant_id) {
        this.tempApplicant = user;
      }
      if (user.id == this.tempApplication.evaluator_nominated_id) {
        this.tempEvaluator = user;
      }
      if (user.user_type == "EV") {
        this.tempEvaluatorList.push(user);
      }
    });
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
              result.name + ". " + result.aspect;

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
                  if (this.evaluationFormArray.length > 0)
                    this.evaluationFormArray.at(index).patchValue({
                      ...this.tempEvaluation[index],
                      assessment_aspect_name:
                        result.name + ". " + result.aspect,
                    });
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
    console.log(this.evaluatorForm);
    this.scheduleForm.value.date = moment(
      new Date(this.scheduleForm.value.date)
    ).format("YYYY-MM-DD");
    this.scheduleForm.value.application = this.tempApplication.id;
    this.evaluatorForm.value.status = "IE";
    this.defaultModal.hide();
    console.log("schedule: ", this.scheduleForm.value);
    this.applicationService
      .doAssignEvaluator(this.evaluatorForm.value, this.tempApplication.id)
      .subscribe(
        () => {
          this.successfulRegisterEvaluatorMessage();
        },
        () => {
          this.unsuccessfulRegisterEvaluatorMessage();
        },
        () => {
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

          let obj = {
            title: "Evaluator Assign",
            message: `Evaluator will come to your house at ${this.scheduleForm.value.date} (${session})`,
            to_user: this.tempApplicant.id,
            date_send: moment().format("YYYY-MM-DD"),
          };
          this.notificationService.register(obj).subscribe(
            (res) => console.log("res", res),
            (err) => console.error("err", err)
          );
        }
      );
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
      },
      () => {
        this.loadingBar.complete();
      },
      () => {
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
      }
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
            console.log("res", res);
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
