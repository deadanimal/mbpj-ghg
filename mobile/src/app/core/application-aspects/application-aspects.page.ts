import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64 } from '@ionic-native/base64/ngx';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Application } from 'src/app/shared/services/applications/applications.model';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { Aspect } from 'src/app/shared/services/aspects/aspects.model';
import { AspectsService } from 'src/app/shared/services/aspects/aspects.service';
import { AssessmentsService } from 'src/app/shared/services/assessments/assessments.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
 
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-application-aspects',
  templateUrl: './application-aspects.page.html',
  styleUrls: ['./application-aspects.page.scss'],
})
export class ApplicationAspectsPage implements OnInit {

  public loadingMessage: HTMLIonLoadingElement

  public formGroup: FormGroup
  public form: FormArray

  applicationForm = new FormGroup({
    applicant: new FormControl(''),
    applied_house: new FormControl('')
  })

  public tempImageData: string[] = []
  public tempImageEncoded: string[] = []

  public tempApplication
  public tempAssessmentAspects: Aspect[] = []
  public tempSelectedHouse

  public energySaving: number = 0
  public consumptionElectricity: number = 0
  public consumptionWater: number = 0

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private assessmentService: AssessmentsService,
    private aspectService: AspectsService,
    public activatedRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public toastController: ToastController,
    public base64: Base64,
    public router: Router,
    private formBuilder: FormBuilder,
    private camera: Camera
  ) { 
    this.tempSelectedHouse = this.router.getCurrentNavigation().extras
    this.tempAssessmentAspects = this.aspectService.aspects
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      form: this.formBuilder.array([this.initAssessment()])
    })

    this.applicationForm.value.applicant = this.authService.userID
    this.applicationForm.value.applied_house = this.tempSelectedHouse.id
    this.applicationForm.value.date_submitted = moment(new Date()).format("YYYY-MM-DD")
    this.calculateConsumption()
  }


  // Dynamic form
  initAssessment() {
    return this.formBuilder.group({
      application: new FormControl(''),
      assessment_aspect: new FormControl(''),
      remarks: new FormControl(''),
      supporting_doc: new FormControl(''),
      total_led: new FormControl(''),
      total_lamp: new FormControl('')
    })
  }

  addAssessment() {
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.initAssessment())
    console.log(this.form.value)
  }

  removeAssessment(ind: number){
    this.form.removeAt(ind)
  }

  async openUploadSheet(formNumber: number) {
    const actionSheet = await this.actionSheetController.create({
      header: '',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          icon: 'camera',
          handler: () => {
            console.log('Camera opened')
            this.openCamera(formNumber)
          }
        }, 
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            console.log('Gallery opened')
            this.openGallery(formNumber)
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openCamera(formNumber: number) {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.tempImageData[formNumber] = imageData
      //this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.encodeFile64(formNumber)
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });
  }

  openGallery (formNumber: number): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 70,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          this.tempImageData[formNumber] = file_uri
          this.encodeFile64(formNumber)
        },
        (err) => {
          console.log(err)
        }
      );
    /**/
  }

  encodeFile64(formNumber: number){
    this.base64.encodeFile(this.tempImageData[formNumber]).then((base64File: string) => {
      this.tempImageEncoded[formNumber] =  base64File
      this.formGroup.value.form[formNumber].supporting_doc = this.tempImageEncoded[formNumber]
      console.log(this.tempImageEncoded[formNumber])
    }, (err) => {
      console.log(err)
    });
  }

  submitApplication() {
    this.applicationForm.value.date_submitted = moment().format('YYYY-MM-DD')
    this.applicationService.create(this.applicationForm.value).subscribe(
      (data) => {
        this.tempApplication = data
        //console.log('> ', this.tempApplication)
      },
      () => {
        this.unsuccessfulToast()
      },
      () => {
        this.submitAssessment()
      }
    )
  }

  submitAssessment() {
    console.log(this.formGroup)
    this.formGroup.value.form.forEach((singleForm, ind, arr) => {
      //element.supporting_doc = this.imageSrc[calc]
      singleForm.application = this.tempApplication.id
      console.log(singleForm)
      this.assessmentService.create(singleForm).subscribe(
        () => {
          //this.presentToast()
          this.assessmentService.getAllExtended().subscribe()
        },
        () => {
          this.unsuccessfulToast()
        },
        () => {
          this.successfulToast()
        }
      )
      if (ind === arr.length - 1) {
        this.successfulToast()
        this.formGroup.reset()
        this.applicationForm.reset()
        this.router.navigate(['/applicant/home'])
      }
    });
  }

  async confirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Sure to confirm?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.submitApplication()
            //this.router.navigate(['/applicant/house-add-new'])
          }
        }
      ]
    });

    await alert.present();
  }

  async successfulToast() {
    const toast = await this.toastController.create({
      message: 'Success',
      position: 'top',
      duration: 3000,
      color: 'ghg-green'
    });
    toast.present();
  }

  async unsuccessfulToast() {
    const toast = await this.toastController.create({
      message: 'Error',
      position: 'top',
      duration: 3000,
      color: 'ghg-green'
    });
    toast.present();
  }

  calculateA3(eventIndex) {
    console.log('led ', this.formGroup.value.form[eventIndex].total_led)
    console.log('lamp ', this.formGroup.value.form[eventIndex].total_lamp)
    this.energySaving = this.formGroup.value.form[eventIndex].total_led / (this.formGroup.value.form[eventIndex].total_lamp + this.formGroup.value.form[eventIndex].total_led) * 100
    console.log(this.energySaving)
  }

  calculateConsumption() {
    let averagelectricity = (this.tempSelectedHouse.electricity_bill_1_usage + this.tempSelectedHouse.electricity_bill_2_usage + this.tempSelectedHouse.electricity_bill_3_usage)/3
    let averageWater = (this.tempSelectedHouse.water_bill_1_usage + this.tempSelectedHouse.water_bill_2_usage + this.tempSelectedHouse.water_bill_3_usage)/3
    console.log('average water ', averageWater)
    console.log('permanent occupant ', this.tempSelectedHouse.permanent_occupant)
    this.consumptionElectricity = (averagelectricity/this.tempSelectedHouse.permanent_occupant)
    this.consumptionWater = (averageWater * 1000)/(this.tempSelectedHouse.permanent_occupant * 30)
  }

}
