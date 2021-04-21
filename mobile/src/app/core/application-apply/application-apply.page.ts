import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

import { Vehicles } from 'src/assets/data/vehicles';
import { TipsPage } from '../tips/tips.page';
import { MediasService } from 'src/app/shared/services/medias/medias.service';

@Component({
  selector: 'app-application-apply',
  templateUrl: './application-apply.page.html',
  styleUrls: ['./application-apply.page.scss'],
})
export class ApplicationApplyPage implements OnInit {

  // Image
  imgConstruction = 'assets/img/default/Construction.png';

  // Form
  applicationForm: FormGroup
  mediaForm: FormGroup

  // Loading
  isLoading: boolean = false
  isUploading1: boolean = false
  isUploading2: boolean = false
  isUploading3: boolean = false
  isUploading4: boolean = false
  isUploading5: boolean = false
  isUploading6: boolean = false

  // Data
  imageSelected1: string
  imageSelected2: string
  imageSelected3: string
  imageSelected4: string
  imageSelected5: string
  imageSelected6: string
  imageSelectedPreview1: string
  imageSelectedPreview2: string
  imageSelectedPreview3: string
  imageSelectedPreview4: string
  imageSelectedPreview5: string
  imageSelectedPreview6: string

  // Type
  vehicleOptions = Vehicles
  
  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private mediaService: MediasService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private popoverCtrl: PopoverController,
    private toastr: NotifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.applicationForm = this.fb.group({
      applicant: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      applied_house: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      total_lamp: new FormControl(1, Validators.compose([
        Validators.required
      ])),
      total_led: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      vehicle_car: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      vehicle_motorcycle: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      vehicle_bicycle: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      vehicle_other: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_month: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_usage: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_doc: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_month: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_usage: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_doc: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_month: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_usage: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_doc: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      water_bill_1_month: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      water_bill_1_usage: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      water_bill_1_doc: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      water_bill_2_month: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      water_bill_2_usage: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      water_bill_2_doc: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      water_bill_3_month: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      water_bill_3_usage: new FormControl(0, Validators.compose([
        Validators.required
      ])),
      water_bill_3_doc: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
    
    this.mediaForm = this.fb.group({
      document: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
    this.applicationForm.controls['applicant'].setValue(this.authService.userID)
  }

  confirm() {

  }

  submit() {
    // this.isLoading = true
    // this.applicationService.create(this.applicationForm.value).subscribe(
    //   () => {},
    //   () => {},
    //   () => {}
    // )
    this.toastr.openToastr('Your application has been submitted!')
    this.navigatePage('/core/home')
  }

  draft() {

  }

  async openUploadSheet(index: number) {
    let header = ''
    switch(index) {
      case 1:
        header = 'Upload electricity bill document #1'
        break;
      case 2:
        header = 'Upload electricity bill document #2'
        break;
      case 3:
        header = 'Upload electricity bill document #3'
        break;
      case 4:
        header = 'Upload water bill document #1'
        break;
      case 5:
        header = 'Upload water bill document #2'
        break;
      case 6:
        header = 'Upload water bill document #3'
        break;
      default: 
        header = 'Upload document'
        break;
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: header,
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Gallery',
          icon: 'images-outline',
          handler: () => {
            this.openGallery(index)
          }
        },
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.openCamera(index)
          }
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openGallery(index: number) {
    // console.log('Gallery opened')
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 60,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          if (index == 1) {
            // Electricity bill 1
            this.imageSelected1 = 'data:image/jpeg;base64,' + file_uri
            this.imageSelectedPreview1 = this.imageSelected1
            // this.applicationForm.controls['electricity_bill_1_doc'].setValue(this.imageSelected1)
            this.mediaForm.controls['document'].setValue(this.imageSelected1)
            this.uploadDocument(1)
          }
          else if (index == 2) {
            // Electricity bill 2
            this.imageSelected2 = 'data:image/jpeg;base64,' + file_uri
            this.imageSelectedPreview2 = this.imageSelected2
            // this.applicationForm.controls['electricity_bill_2_doc'].setValue(this.imageSelected2)
            this.mediaForm.controls['document'].setValue(this.imageSelected2)
            this.uploadDocument(2)
          }
          else if (index == 3) {
            // Electricity bill 3
            this.imageSelected3 = 'data:image/jpeg;base64,' + file_uri
            this.imageSelectedPreview3 = this.imageSelected3
            // this.applicationForm.controls['electricity_bill_3_doc'].setValue(this.imageSelected3)
            this.mediaForm.controls['document'].setValue(this.imageSelected3)
            this.uploadDocument(3)
          }
          else if (index == 4) {
            // Water bill 1
            this.imageSelected4 = 'data:image/jpeg;base64,' + file_uri
            this.imageSelectedPreview4 = this.imageSelected4
            // this.applicationForm.controls['water_bill_1_doc'].setValue(this.imageSelected4)
            this.mediaForm.controls['document'].setValue(this.imageSelected4)
            this.uploadDocument(4)
          }
          else if (index == 5) {
            // Water bill 2
            this.imageSelected5 = 'data:image/jpeg;base64,' + file_uri
            this.imageSelectedPreview5 = this.imageSelected5
            // this.applicationForm.controls['water_bill_2_doc'].setValue(this.imageSelected5)
            this.mediaForm.controls['document'].setValue(this.imageSelected5)
            this.uploadDocument(5)
          }
          else if (index == 6) {
            // Water bill 3
            this.imageSelected6 = 'data:image/jpeg;base64,' + file_uri
            this.imageSelectedPreview6 = this.imageSelected5
            // this.applicationForm.controls['water_bill_3_doc'].setValue(this.imageSelected6)
            this.mediaForm.controls['document'].setValue(this.imageSelected6)
            this.uploadDocument(6)
          }
        },
        (err) => {
          console.log(err
        )}
      );
  }

  openCamera(index: number) {
    // console.log('Camera opened')
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      if (index == 1) {
        // Electricity bill 1
        this.imageSelected1 = 'data:image/jpeg;base64,' + imageData
        this.imageSelectedPreview1 = this.imageSelected1
        // this.applicationForm.controls['electricity_bill_1_doc'].setValue(this.imageSelected1)
        this.mediaForm.controls['document'].setValue(this.imageSelected1)
        this.uploadDocument(1)
      }
      else if (index == 2) {
        // Electricity bill 2
        this.imageSelected2 = 'data:image/jpeg;base64,' + imageData
        this.imageSelectedPreview2 = this.imageSelected2
        // this.applicationForm.controls['electricity_bill_2_doc'].setValue(this.imageSelected2)
        this.mediaForm.controls['document'].setValue(this.imageSelected2)
        this.uploadDocument(2)
      }
      else if (index == 3) {
        // Electricity bill 3
        this.imageSelected3 = 'data:image/jpeg;base64,' + imageData
        this.imageSelectedPreview3 = this.imageSelected3
        // this.applicationForm.controls['electricity_bill_3_doc'].setValue(this.imageSelected3)
        this.mediaForm.controls['document'].setValue(this.imageSelected3)
        this.uploadDocument(3)
      }
      else if (index == 4) {
        // Water bill 1
        this.imageSelected4 = 'data:image/jpeg;base64,' + imageData
        this.imageSelectedPreview4 = this.imageSelected4
        // this.applicationForm.controls['water_bill_1_doc'].setValue(this.imageSelected4)
        this.mediaForm.controls['document'].setValue(this.imageSelected4)
        this.uploadDocument(4)
      }
      else if (index == 5) {
        // Water bill 2
        this.imageSelected5 = 'data:image/jpeg;base64,' + imageData
        this.imageSelectedPreview5 = this.imageSelected5
        // this.applicationForm.controls['water_bill_2_doc'].setValue(this.imageSelected5)
        this.mediaForm.controls['document'].setValue(this.imageSelected5)
        this.uploadDocument(5)
      }
      else if (index == 6) {
        // Water bill 3
        this.imageSelected6 = 'data:image/jpeg;base64,' + imageData
        this.imageSelectedPreview6 = this.imageSelected5
        // this.applicationForm.controls['water_bill_3_doc'].setValue(this.imageSelected6)
        this.mediaForm.controls['document'].setValue(this.imageSelected6)
        this.uploadDocument(6)
      }
    }, (err) => {
      alert("error " + JSON.stringify(err))
    })
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  async viewTips(type: any) {
    const popover = await this.popoverCtrl.create({
      component: TipsPage,
      // cssClass: 'my-custom-class',
      componentProps: {
        'type': type
      },
      translucent: true
    });
    return await popover.present();
  }

  uploadDocument(index: number) {
    switch(index) {
      case 1:
        this.isUploading1 = true
        break;
      case 2:
        this.isUploading2 = true
        break;
      case 3:
        this.isUploading3 = true
        break;
      case 4:
        this.isUploading4 = true
        break;
      case 5:
        this.isUploading5 = true
        break;
      case 6:
        this.isUploading6 = true
        break;
      default:
        console.log('Wrong index')
        break;
    }
    this.mediaService.create(this.mediaForm.value).subscribe(
      () => {
        this.isUploading1 = false
        this.isUploading2 = false
        this.isUploading3 = false
        this.isUploading4 = false
        this.isUploading5 = false
        this.isUploading6 = false
      },
      () => {
        this.isUploading1 = false
        this.isUploading2 = false
        this.isUploading3 = false
        this.isUploading4 = false
        this.isUploading5 = false
        this.isUploading6 = false
        this.toastr.openToastrError('Error uploading document')
      },
      () => {
        switch(index) {
          case 1:
            this.applicationForm.controls['electricity_bill_1_doc'].setValue(this.mediaService.media.id)
            break;
          case 2:
            this.applicationForm.controls['electricity_bill_2_doc'].setValue(this.mediaService.media.id)
            break;
          case 3:
            this.applicationForm.controls['electricity_bill_3_doc'].setValue(this.mediaService.media.id)
            break;
          case 4:
            this.applicationForm.controls['water_bill_1_doc'].setValue(this.mediaService.media.id)
            break;
          case 5:
            this.applicationForm.controls['water_bill_2_doc'].setValue(this.mediaService.media.id)
            break;
          case 6:
            this.applicationForm.controls['water_bill_3_doc'].setValue(this.mediaService.media.id)
            break;
          default:
            console.log('Wrong index')
            break;
        }
      }
    )
  }

}
