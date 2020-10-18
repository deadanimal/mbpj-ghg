import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import * as moment from 'moment';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TicketAnswersService } from 'src/app/shared/services/ticket-answers/ticket-answers.service';
import { TicketQuestionsService } from 'src/app/shared/services/ticket-questions/ticket-questions.service';
import { TicketQuestion } from 'src/app/shared/services/ticket-questions/ticket-questions.model';
import { TicketAnswer } from 'src/app/shared/services/ticket-answers/ticket-answers.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.scss'],
})
export class HelpdeskComponent implements OnInit {

  public loadedTicketQuestions: TicketQuestion[] = []
  public loadedTicketAnswers: TicketAnswer[] = []

  ticketQuestionForm = new FormGroup({
    question: new FormControl(''),
    status: new FormControl('UR'),
    date_submitted: new FormControl(''),
    submitted_by: new FormControl('')
  })

  // Loading message
  public loadingMessage: HTMLIonLoadingElement

  constructor(
    private authService: AuthService,
    private ticketAnswerService: TicketAnswersService,
    private ticketQuestionService: TicketQuestionsService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.loadedTicketQuestions = this.ticketQuestionService.questionsFiltered
    this.loadedTicketQuestions.forEach(
      (question) => {
        question.date_submitted = moment(question.date_submitted, 'YYYY-MM-DD').format('DD-MM-YYYY')
        this.ticketAnswerService.answers.forEach(
          (answer) => {
            if (question.id == answer.question_id) {
              this.loadedTicketAnswers.push(answer)
            }
          }
        )
      }
    )
  }

  async submitQuestion() {
    const alert = await this.alertController.create({
      header: this.translate.instant('HELPDESK.confirmHeader'),
      message: this.translate.instant('HELPDESK.confirmMessage'),
      buttons: [
        {
          text: this.translate.instant('HELPDESK.cancelButton'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: this.translate.instant('HELPDESK.confirmButton'),
          handler: () => {
            //console.log('Confirm Okay');
            this.onConfirm()
          }
        }
      ]
    });

    await alert.present();
  }

  async onConfirm(){
    this.ticketQuestionForm.value.date_submitted = moment().format('YYYY-MM-DD')
    this.ticketQuestionForm.value.submitted_by = this.authService.userID
    //console.log(this.ticketQuestionForm.value)
    this.loadingMessage = await this.loadingController.create({
      message: 'Loading...'
    })

    await this.loadingMessage.present()

    this.ticketQuestionService.create(this.ticketQuestionForm.value).subscribe(
      () => {
        this.refreshData()
        this.loadingMessage.dismiss()
      },
      () => {
        this.loadingMessage.dismiss()
        this.unsuccessfulToast()
      },
      () => {
        this.ticketQuestionForm.reset()
        this.successfulToast()
      }
    )

  }

  async doConfirmLogout() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.router.navigate(['/auth/login'])
          }
        }
      ]
    });

    await alert.present();
  }

  refreshData() {
    this.loadedTicketQuestions = []
    this.loadedTicketAnswers = []
    this.ticketQuestionService.getUser(this.authService.userID).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.loadedTicketQuestions = this.ticketQuestionService.questionsFiltered
        this.loadedTicketQuestions.forEach(
          (question) => {
            this.ticketAnswerService.answersFiltered.forEach(
              (answer) => {
                if (question.id == answer.question_id) {
                  this.loadedTicketAnswers.push(answer)
                }
              }
            )
          }
        )
      }
    )
  }

  async successfulToast() {
    const toast = await this.toastController.create({
      message: this.translate.instant('HELPDESK.successMessage'),
      position: 'top',
      duration: 3000
    })
    toast.present()
  }

  async unsuccessfulToast() {
    const toast = await this.toastController.create({
      message: this.translate.instant('HELPDESK.unsuccessMessage'),
      position: 'top',
      duration: 3000
    })
    toast.present()
  }

}
