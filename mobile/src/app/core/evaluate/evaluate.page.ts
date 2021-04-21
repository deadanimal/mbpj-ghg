import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { AssessmentsService } from 'src/app/shared/services/assessments/assessments.service';
import { EvaluationsService } from 'src/app/shared/services/evaluations/evaluations.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
//import { ApplicationEvaluationsService } from 'src/app/shared/services/application-evaluations/application-evaluations.service';
import { Camera } from '@ionic-native/camera/ngx';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.page.html',
  styleUrls: ['./evaluate.page.scss'],
})
export class EvaluatePage implements OnInit {

  isDoneSubmit: boolean = false
  isConfirm: boolean = false

  panelOpenState: boolean = false

  a1Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  a2Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  a3Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  a4Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  a5Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  a6Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  b1Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  b2Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  b3Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  b4Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  b5Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  c1Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  c2Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  c3Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  c4Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    evaluation_assessment_id: new FormControl('')
  })
  d1Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    application_assessment: new FormControl('49c98768-c26e-40bb-86c1-d82c645dc0d5')
  })
  d2Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    application_assessment: new FormControl('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
  })
  e1Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    application_assessment: new FormControl('49c98768-c26e-40bb-86c1-d82c645dc0d5')
  })
  e2Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    application_assessment: new FormControl('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
  })
  e3Form = new FormGroup({
    //id: new FormControl(''),
    application_id: new FormControl(''),
    equipment: new FormControl(''),
    system: new FormControl(''),
    efficiency: new FormControl(''),
    remarks: new FormControl(''),
    application_assessment: new FormControl('0eeb7912-4be7-4e4a-99f5-e97c4a7fbae2')
  })

  totalA1: number = 0
  totalA2: number = 0
  totalA3: number = 0
  totalA4: number = 0
  totalA5: number = 0
  totalA6: number = 0
  totalB1: number = 0
  totalB2: number = 0
  totalB3: number = 0
  totalB4: number = 0
  totalB5: number = 0
  totalC1: number = 0
  totalC2: number = 0
  totalC3: number = 0
  totalC4: number = 0
  totalD1: number = 0
  totalD2: number = 0
  totalE1: number = 0
  totalE2: number = 0
  totalE3: number = 0

  totalAll: number = 0 // new

  totalEligibleA: number
  totalEligibleB: number
  totalEligibleC: number
  totalEligibleD: number
  totalEligibleE: number

  equipmentA: number
  systemA: number
  efficiencyA: number
  equipmentB: number
  systemB: number
  efficiencyB: number
  equipmentC: number
  systemC: number
  efficiencyC: number
  equipmentD: number
  systemD: number
  efficiencyD: number
  equipmentE: number
  systemE: number
  efficiencyE: number


  slidesOptions = {
    initialSlide: 0,
    speed: 400
  }

  tempApplication
  tempAssessment
  tempHouse
  tempApplicant
  tempApplicationAssessment = []

  imageSrc

  constructor(
    private userService: UsersService,
    private applicationService: ApplicationsService,
    private assessmentService: AssessmentsService,
    private evaluationService: EvaluationsService,
    private houseService: HousesService,
    private camera: Camera,

    public alertController: AlertController,
    public router: Router,
    public toastr: ToastController
  ) { 
    this.tempApplication = this.router.getCurrentNavigation().extras
    console.log('application: ', this.tempApplication)
  }

  ngOnInit() {
    this.initData()
  }

  initData(){
    this.houseService.houses.forEach(
      (data) => {
        if (data.id == this.tempApplication.applied_house){
          this.tempHouse = data
          console.log('house: ', this.tempHouse)
        }
      }
    )
    this.userService.users.forEach(
      (data) => {
        if (data.id == this.tempHouse.applicant){
          this.tempApplicant = data
          console.log('user: ', this.tempApplicant)
        }
      }
    )
    this.assessmentService.assessments.forEach(
      (data) => {
        if (data.application == this.tempApplication.id){
          this.tempApplicationAssessment.push(data)
          console.log(this.tempApplicationAssessment)
        }
      }
    )
  }

  previewEvaluation() {
    this.totalA1 = (this.a1Form.value.equipment + this.a1Form.value.system + this.a1Form.value.efficiency)/100*20
    this.totalA2 = this.a2Form.value.equipment + this.a2Form.value.system + this.a2Form.value.efficiency/100*20
    this.totalA3 = this.a3Form.value.equipment + this.a3Form.value.system + this.a3Form.value.efficiency/100*20
    this.totalA4 = this.a4Form.value.equipment + this.a4Form.value.system + this.a4Form.value.efficiency/100*20
    this.totalA5 = this.a5Form.value.equipment + this.a5Form.value.system + this.a5Form.value.efficiency/100*20
    this.totalA6 = this.a6Form.value.equipment + this.a6Form.value.system + this.a6Form.value.efficiency/100*25

    this.totalB1 = this.b1Form.value.equipment + this.b1Form.value.system + this.b1Form.value.efficiency/100*20
    this.totalB2 = this.b2Form.value.equipment + this.b2Form.value.system + this.b2Form.value.efficiency/100*20
    this.totalB3 = this.b3Form.value.equipment + this.b3Form.value.system + this.b3Form.value.efficiency/100*25
    this.totalB4 = this.b4Form.value.equipment + this.b4Form.value.system + this.b4Form.value.efficiency/100*20
    this.totalB5 = this.b5Form.value.equipment + this.b5Form.value.system + this.b5Form.value.efficiency/100*20

    this.totalC1 = this.c1Form.value.equipment + this.c1Form.value.system + this.c1Form.value.efficiency/100*25
    this.totalC2 = this.c2Form.value.equipment + this.c2Form.value.system + this.c2Form.value.efficiency/100*25
    this.totalC3 = this.c3Form.value.equipment + this.c3Form.value.system + this.c3Form.value.efficiency/100*25
    this.totalC3 = this.c4Form.value.equipment + this.c4Form.value.system + this.c4Form.value.efficiency/100*25

    this.totalD1 = this.d1Form.value.equipment + this.d1Form.value.system + this.d1Form.value.efficiency/100*20
    this.totalD2 = this.d2Form.value.equipment + this.d2Form.value.system + this.d2Form.value.efficiency/100*20

    this.totalE1 = this.e1Form.value.equipment + this.e1Form.value.system + this.e1Form.value.efficiency/100*20
    this.totalE2 = this.e2Form.value.equipment + this.e2Form.value.system + this.e2Form.value.efficiency/100*20
    this.totalE3 = this.e3Form.value.equipment + this.e3Form.value.system + this.e3Form.value.efficiency/100*20

    let sumA = (this.totalA1 + this.totalA2 + this.totalA3 + this.totalA4 + this.totalA5 + this.totalA6)/125 * 100
    let sumB = (this.totalB1 + this.totalB2 + this.totalB3 + this.totalB4 + this.totalB5)/105*100
    let sumC = (this.totalC1 + this.totalC2 + this.totalC3 + this.totalC4)
    let sumD = (this.totalD1 + this.totalD2)/40*100
    let sumE = (this.totalE1 + this.totalE2 + this.totalE3)/60*100
    this.totalAll = (sumA + sumB + sumC + sumD + sumE)/180 * 100

    this.isConfirm = true;
  }

  doEvalute(){
    let todayDate: string = moment(new Date()).format("YYYY-MM-DD")
    /*this.evaluateForm.value.date_evaluated = todayDate
    this.evaluateForm.value.assessment_id = this.tempAssessment.id
    console.log(this.evaluateForm.value)
    this.applicationEvaluationService.doCreateApplicationEvaluation(this.evaluateForm.value).subscribe(
      () => {
        this.successfulToast()
      },
      () => {
        this.unsuccessfulToast()
      }
    )*/
    this.successfulToast()
    this.router.navigate(['/evaluator/home'])
  }

  async successfulToast() {
    console.log('successfultoast')
    const toast = await this.toastr.create({
      message: 'Submit evaluation successful',
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

  async unsuccessfulToast() {
    const toast = await this.toastr.create({
      message: 'Submit evaluation unsuccessful',
      duration: 3000,
      position: 'top',
      color: 'ghg-green'
    });
    toast.present();
  }

  selectAttachment (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          this.imageSrc = 'data:image/jpeg;base64,' + file_uri
          
        },
        (err) => {
          console.log(err
        )}
      );
    /**/
  }

  doSubmit(){


    /*const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Confirm to send the evaluation?',
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
            console.log('Confirm Okay');
            this.isDoneSubmit = true
          }
        }
      ]
    });

    await alert.present();*/

    this.a1Form.value.assessment_id //= this.tempAssessment.id
    this.a2Form.value.assessment_id //= this.tempAssessment.id
    this.a3Form.value.assessment_id //= this.tempAssessment.id
    this.a4Form.value.assessment_id //= this.tempAssessment.id
    this.a5Form.value.assessment_id //= this.tempAssessment.id
    this.a6Form.value.assessment_id //= this.tempAssessment.id
    this.b1Form.value.assessment_id //= this.tempAssessment.id
    this.b2Form.value.assessment_id //= this.tempAssessment.id
    this.b3Form.value.assessment_id //= this.tempAssessment.id
    this.b4Form.value.assessment_id //= this.tempAssessment.id
    this.b5Form.value.assessment_id //= this.tempAssessment.id
    
    console.log('submitt')

    this.successfulToast()
    this.router.navigate(['/home'])

  }

  backToEvaluation() {
    this.isConfirm = false
  }

}
