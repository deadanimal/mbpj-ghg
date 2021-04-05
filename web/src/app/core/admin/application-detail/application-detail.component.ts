import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationExtended, ApplicationTemp } from 'src/app/shared/services/applications/applications.model';
import swal from 'sweetalert2';

import * as moment from 'moment';
import { forkJoin, Subscription } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { HouseExtended } from 'src/app/shared/services/houses/houses.model';
import { aspectTypes } from 'src/app/shared/options/aspect-types';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { UserExtended } from 'src/app/shared/services/users/users.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SchedulesService } from 'src/app/shared/services/schedules/schedules.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {

  // Application
  application: ApplicationExtended
  applicationID: any
  house: HouseExtended
  subscriptionItems = []
  aspectTypes = aspectTypes
  evaluators: UserExtended[] = []

  // Form
  scheduleForm: FormGroup
  rebateForm: FormGroup
  evaluatorForm: FormGroup

  // Checker
  isApplicationEmpty: boolean = true
  isApplicantEmpty: boolean = true
  isEvaluatorEmpty: boolean = true
  isHouseEmpty: boolean = true
  isScheduleEmpty: boolean = true
  isEvaluationEmpty: boolean = true
  isCompleted: boolean = false
  canApprove: boolean = false
  canComplete: boolean = false
  canEvaluation: boolean = false
  canInProgress: boolean = false
  canPay: boolean = false
  canReject: boolean = false

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-dialog-centered'
  };

  // Subscriber
  subscription: Subscription
  subscriptionStatus: Subscription

  // Datepicker
  dateToday: Date
  dateStart: Date
  dateConfig = { 
    isAnimated: true, 
    dateInputFormat: 'DD-MM-YYYY',
    containerClass: 'theme-dark-blue' 
  }

  constructor(
    private applicationService: ApplicationsService,
    private scheduleService: SchedulesService,
    private userService: UsersService,
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.applicationID = this.route.snapshot.queryParamMap.get('id')

    if (!this.applicationID) {
      this.navigatePage('/admin/applications')
    }

    if (
      this.applicationID && (
        typeof this.applicationID === 'string' || 
        this.applicationID instanceof String
      )
    ) {
      this.getData()
    }
    else {
      this.navigatePage('/admin/management/users')
    }
  }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    if (this.subscriptionStatus) {
      this.subscriptionStatus.unsubscribe()
    }
  }

  getData() {
    this.subscriptionItems = []
    this.loadingBar.start()

    this.subscription = forkJoin([
      this.applicationService.getOne(this.applicationID),
      this.userService.getEvaluators()
    ]).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.application = this.applicationService.applicationExtended
        this.evaluators = this.userService.evaluators

        if (this.application['status'] == 'CM') {
          this.isCompleted = true
        }
        else {
          this.isCompleted = false
        }

        this.isApplicationEmpty = false

        if (this.application['applicant']) {
          this.isApplicantEmpty = false
        }

        if (this.application['evaluator_nominated']) {
          this.isEvaluatorEmpty = false
        }

        if (this.application['applied_house']) {
          this.isHouseEmpty = false
        }

        if (this.application['evaluation_schedule_application']) {
          this.isScheduleEmpty = false
        }

        if (this.application['application_assessment_application']) {
          this.isEvaluationEmpty = false
        }

        switch(this.application['status']) { 
          case 'AP': { 
            // Approved status statements; 
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = true
            this.canReject = false
            break; 
          } 
          case 'CM': { 
            // Completed status statements; 
            this.canApprove = true
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = true
            break; 
          }
          case 'CR': { 
            // Created status statements; 
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
            break; 
          }
          case 'DR': { 
            // Draft status statements; 
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
            break; 
          }
          case 'EV': { 
            // Evaluation status statements; 
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
            break; 
          } 
          case 'IP': { 
            // In progress status statements;
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = true
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
            break; 
          } 
          case 'PD': { 
            // Paid status statements;
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false 
            break; 
          } 
          case 'RJ': { 
            // Rejected status statements; 
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
            break; 
          }
          case 'SM': { 
            // Submitted status statements; 
            this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
            break; 
          } 
          default: { 
             // Default statements; 
             this.canApprove = false
            this.canComplete = false
            this.canEvaluation = false
            this.canInProgress = false
            this.canPay = false
            this.canReject = false
             break; 
          } 
        } 

        // Forms
        this.scheduleForm.controls['application'].patchValue(this.applicationID)
        this.rebateForm.controls['application'].patchValue(this.applicationID)
      }
    )
  }

  initForm() {
    this.scheduleForm = this.fb.group({
      application: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      date: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      session: new FormControl('AM', Validators.compose([
        Validators.required
      ]))
    })

    this.rebateForm = this.fb.group({
      application: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      amount_approved: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      remarks: new FormControl(null)
    })

    this.evaluatorForm = this.fb.group({
      evaluator_nominated: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  confirm(type: string) {
    let title = 'Confirmation'
    let message = ''
    
    if (type === 'approve') {
      message = 'Are you sure to approve this application?'

      swal.fire({
        title: title,
        text: message,
        type: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        confirmButtonClass: 'btn btn-info',
        cancelButtonClass: 'btn btn-outline-info'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.value) {
          let amountNew = this.rebateForm.value['amount_approved'] * 1000
          this.rebateForm.controls['amount_approved'].setValue(amountNew)
          this.triggerCase('approve', 'confirm')
        } else {
          this.triggerCase('approve', 'cancel')
        }
      });
    }
    else if (type === 'reject') {
      message = 'Are you sure to reject this application?'

      swal.fire({
        title: title,
        text: message,
        type: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        confirmButtonClass: 'btn btn-info',
        cancelButtonClass: 'btn btn-outline-info'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.value) {
          this.triggerCase('reject', 'confirm')
        } else {
          this.triggerCase('reject', 'cancel')
        }
      });
    }
    else if (type === 'assign') {
      let selectedDate = moment(this.scheduleForm.value.date).format('YYYY-MM-DD')
      this.scheduleForm.controls['date'].setValue(selectedDate)

      message = 'Are you sure to assign this evaluator and set schedule to this application?'

      swal.fire({
        title: title,
        text: message,
        type: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        confirmButtonClass: 'btn btn-info',
        cancelButtonClass: 'btn btn-outline-info'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.value) {
          this.triggerCase('assign', 'confirm')
        } else {
          this.triggerCase('assign', 'cancel')
        }
      });
    }
  }

  triggerCase(action: string, type: string) {
    if (type === 'cancel') {
      swal.fire({
        title: 'Canceled',
        text: '',
        type: 'info',
        buttonsStyling: false,
        confirmButtonText: 'Close',
        confirmButtonClass: 'btn btn-outline-info'
      })
    }
    else if (type === 'confirm') {
      if (action === 'approve') {
        // console.log('approve')
        this.subscriptionItems.push(this.applicationService.approve(this.applicationID))
        this.changeStatus()
      }
      else if (action === 'reject') {
        // console.log('reject')
        this.subscriptionItems.push(this.applicationService.reject(this.applicationID))
        this.changeStatus()
      }
      else if (action === 'assign') {
        this.subscriptionItems.push(this.applicationService.update(this.applicationID, this.evaluatorForm.value))
        this.subscriptionItems.push(this.scheduleService.create(this.scheduleForm.value))
        this.subscriptionItems.push(this.applicationService.progress(this.applicationID))
        this.changeStatus()
      }
    }
  }

  changeStatus() {
    this.loadingBar.start()

    this.subscriptionStatus = forkJoin(this.subscriptionItems).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.getData()
        this.subscriptionItems = []
      }
    )
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

}

/*
  1. Get all evaluator
  2. Assign evaluator
  3. Approve rebate with amount
*/