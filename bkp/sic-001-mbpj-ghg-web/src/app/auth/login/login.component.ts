import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { ApplicationAssessmentsService } from 'src/app/shared/services/application-assessments/application-assessments.service';
import { AssessmentAspectsService } from 'src/app/shared/services/assessment-aspects/assessment-aspects.service';
import { EvaluationsService } from 'src/app/shared/services/evaluations/evaluations.service';
import { EvaluationSchedulesService } from 'src/app/shared/services/evaluation-schedules/evaluation-schedules.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { OrganisationsService } from 'src/app/shared/services/organisations/organisations.service';
import { OrganisationTypesService } from 'src/app/shared/services/organisation-types/organisation-types.service';
import { RebatesService } from 'src/app/shared/services/rebates/rebates.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { UserOccupationsService } from 'src/app/shared/services/user-occupations/user-occupations.service';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { TicketQuestionsService } from 'src/app/shared/services/ticket-questions/ticket-questions.service';
import { TicketAnswersService } from 'src/app/shared/services/ticket-answers/ticket-answers.service';
import { ApplicationEventsService } from 'src/app/shared/services/application-events/application-events.service';
import { HouseEventsService } from 'src/app/shared/services/house-events/house-events.service';
import { TicketEventsService } from 'src/app/shared/services/ticket-events/ticket-events.service';
import { UserEventsService } from 'src/app/shared/services/user-events/user-events.service';
import { FaqsService } from 'src/app/shared/services/faqs/faqs.service';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form
  email: string = ''
  pwd: string = ''
  focusUsername
  focusPassword

  loginForm: FormGroup
  loginFormMessage = {
    'username': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private notifyService: NotifyService,
    private router: Router,
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private applicationAssessmentService: ApplicationAssessmentsService,
    private assessmentAspectService: AssessmentAspectsService,
    private evaluationService: EvaluationsService,
    private evaluationScheduleService: EvaluationSchedulesService,
    private faqService: FaqsService,
    private houseService: HousesService,
    private organisationService: OrganisationsService,
    private organisationTypeService: OrganisationTypesService,
    private ticketQuestionService: TicketQuestionsService,
    private ticketAnswerService: TicketAnswersService,
    private userService: UsersService,
    private userOccupationService: UserOccupationsService,
    private rebateService: RebatesService,
    private loadingBar: LoadingBarService,
    private applicationEventService: ApplicationEventsService,
    private houseEventService: HouseEventsService,
    private ticketEventService: TicketEventsService,
    private userEventService: UserEventsService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
    this.initServices()
  }

  initServices(){
    this.applicationService.doRetrieveAllApplications().subscribe()
    this.applicationAssessmentService.doRetrieveAllApplicationAssessments().subscribe()
    this.assessmentAspectService.doRetrieveAllAssessmentAspects().subscribe()
    this.evaluationService.doRetrieveAllEvaluations().subscribe()
    this.evaluationScheduleService.doRetrieveAllEvaluationSchedules().subscribe()
    this.faqService.doRetrieveAllFaqs().subscribe()
    //this.applicationEvaluationService.doRetrieveAllApplicationEvaluations().subscribe()
    //this.applicationEvaluationAssessmentService.doRetrieveAllApplicationEvaluationAssessments().subscribe()
    //this.applicationEvaluationScheduleService.doRetrieveAllApplicationEvaluationSchedules().subscribe()
    this.houseService.getAll().subscribe()
    this.organisationService.doRetrieveAllOrganisations().subscribe()
    this.organisationTypeService.doRetrieveAllOrganisationTypes().subscribe()
    this.rebateService.doRetrieveAllRebates().subscribe()
    this.ticketAnswerService.getAll().subscribe()
    this.ticketQuestionService.getAll().subscribe()
    this.userService.getAll().subscribe()
    this.userOccupationService.doRetrieveAllUserOccupations().subscribe()
    this.applicationEventService.getAll().subscribe()
    this.houseEventService.getAll().subscribe()
    this.ticketEventService.getAll().subscribe()
    this.userEventService.getAll().subscribe()
    //this.authService.checkStorage()
    //this.applicationService.doFilterNakDelete().subscribe()
  }

  login(){
    // this.loginCredentials.value.username = 'admin@prototype.com.my'
    // this.loginCredentials.value.password = '4dm1nghg'
    // console.log(this.loginCredentials.value)
    this.loadingBar.start()
    this.authService.obtainToken(this.loginForm.value).subscribe(
      () => { 
        // console.log ('Accepted')
        this.loadingBar.complete()
      },
      () => { 
        // console.log ('Denied') 
        this.loadingBar.complete()
      },
      () => {
        this.getDetail()
      }
    )
  }

  debugLogin() {
    this.loginForm.value.username = 'administrator@prototype.com.my'
    this.loginForm.value.password = 'a12345678A'
    //console.log(this.loginCredentials.value)
    this.loadingBar.start()
    this.authService.obtainToken(this.loginForm.value).subscribe(
      () => { 
        // console.log ('Accepted')
        this.loadingBar.complete()
      },
      () => { 
        // console.log ('Denied') 
        this.loadingBar.complete()
      },
      () => {
        this.getDetail()
      }
    )
  }

  getDetail() {
    this.authService.getUserDetail().subscribe(
      () => {
        if (this.authService.userType == 'AD'){
          this.successMessage()
          this.router.navigate(['/dashboard'])
        }
      }
    )
  }

  successMessage() {
    let title = 'Success'
    let message = 'Welcome back!'
    this.notifyService.openToastr(title, message)
  }

  testChange() {
    console.log(this.loginForm)
  }

}

