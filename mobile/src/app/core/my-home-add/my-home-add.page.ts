import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';

import { Houses } from 'src/assets/data/houses';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { MediasService } from 'src/app/shared/services/medias/medias.service';

import { Areas } from 'src/assets/data/areas';
import { Occupants } from 'src/assets/data/occupants';

import * as moment from 'moment';

@Component({
  selector: 'app-my-home-add',
  templateUrl: './my-home-add.page.html',
  styleUrls: ['./my-home-add.page.scss'],
})
export class MyHomeAddPage implements OnInit {

  // Image
  imgConstruction = 'assets/img/default/Construction.png';

  // Form
  houseForm: FormGroup
  mediaForm: FormGroup

  houseFormMessages = {
    'address_1': [
      { type: 'required', message: 'This field is required' }
    ],
    'postcode': [
      { type: 'required', message: 'This field is required' },
      { type: 'min', message: 'Please enter a valid postcode' },
      { type: 'max', message: 'Please enter a valid postcode' }
    ],
    'town': [
      { type: 'required', message: 'This field is required' }
    ],
    'building_type': [
      { type: 'required', message: 'This field is required' }
    ],
    'assessment_tax_account': [
      { type: 'required', message: 'This field is required' }
    ],
    'assessment_tax_doc': [
      { type: 'required', message: 'This field is required' }
    ],
    'staying_since': [
      { type: 'required', message: 'This field is required' }
    ],
    'occupants': [
      { type: 'required', message: 'This field is required' }
    ]
  }

  // Type
  houseOptions = [
    { value: 'CD', text: 'Condominium' },
    { value: 'FL', text: 'Flat' },
    { value: 'TO', text: 'Townhouse' },
    { value: 'TE', text: 'Terrace House' },
    { value: 'BS', text: 'Bungalow / Semidetached' },
    { value: 'AS', text: 'Apartment / Service Apartment' }
  ]
  townOptions = Areas
  occupantOptions = Occupants
  // houseOptions = Houses

  // Checker
  isLoading: boolean = false
  isUploading: boolean = false

  // Data
  imageSelected: string
  imageSelectedPreview: string

  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private mediaService: MediasService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private toastr: NotifyService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.houseForm = this.fb.group({
      owner: new FormControl(this.authService.userID, Validators.compose([
        Validators.required
      ])),
      address_1: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      address_2: new FormControl(null),
      address_3: new FormControl(null),
      postcode: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.min(10000),
        Validators.max(99999)
      ])),
      town: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      building_type: new FormControl('OT', Validators.compose([
        Validators.required
      ])),
      assessment_tax_account: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      assessment_tax_doc: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      staying_since: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      occupants: new FormControl(1, Validators.compose([
        Validators.required
      ]))
    })

    this.mediaForm = this.fb.group({
      document: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
    // this.houseForm.controls['owner'].setValue(this.authService.userID)
  }

  submit() {
    // YYYY-MM-DDTHH:mm:ss.SSSSZ'
    let staying_since = moment(this.houseForm.value.staying_since).format('YYYY-MM-DD')
    this.houseForm.controls['staying_since'].setValue(staying_since)
    this.isLoading = true

    this.houseService.create(this.houseForm.value).subscribe(
      () => {
        // Success
        this.isLoading = false
      },
      () => {
        // Failed
        this.isLoading = false
      },
      () => {
        // After
        this.houseForm.reset()
        this.toastr.openToastr('MyHome successfully registered')
        this.navigatePage('/core/home')
      }
    )

    // console.log(this.houseForm.value)
  }

  async openUploadSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload assessment tax document',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Gallery',
          icon: 'images-outline',
          handler: () => {
            this.openGallery()
          }
        },
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.openCamera()
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

  openGallery() {
    // console.log('Gallery opened')
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 60,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,   
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          // this.imageSelected = file_uri
          // this.imageSelectedPreview = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected);
          this.imageSelected = 'data:image/jpeg;base64,' + file_uri
          this.imageSelectedPreview = 'data:image/jpeg;base64,' + file_uri
          this.mediaForm.controls['document'].setValue(this.imageSelected)
          this.uploadDocument()
        },
        (err) => {
          console.log(err
        )}
      );
  }

  openCamera() {
    // console.log('Camera opened')
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      // this.imageSelected = imageData;
      // this.imageSelectedPreview = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected);
      this.imageSelected = 'data:image/jpeg;base64,' + imageData;
      this.imageSelectedPreview = 'data:image/jpeg;base64,' + imageData;
      this.mediaForm.controls['document'].setValue(this.imageSelected)
      this.uploadDocument()
    }, (err) => {
      alert("error " + JSON.stringify(err))
    })
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  uploadDocument() {
    this.isUploading = true
    this.mediaService.create(this.mediaForm.value).subscribe(
      () => {
        this.isUploading = false
      },
      () => {
        this.isUploading = false
        this.toastr.openToastrError('Error uploading document')
      },
      () => {
        this.houseForm.controls['assessment_tax_doc'].setValue(this.mediaService.media.id)
      }
    )
  }

  // encodeImage() {
  //   console.log('Start encode')
  //   this.base64.encodeFile(this.imageSelected).then(
  //     (encodedFile: string) => {
  //       this.imageSelectedPreview = encodedFile
  //       console.log(this.imageSelectedPreview)
  //     }
  //   )
  // }

  // calculateMonths() {
  //   let dateEnd = moment(this.houseForm.value.staying_since)
  //   let dateStart = moment()
  //   let dateDuration = Math.round(moment.duration(dateStart.diff(dateEnd)).asMonths())
  //   console.log(moment(this.houseForm.value.staying_since).format('YYYY-MM-DDTHH:mm:ss.SSSSZ'))
  // }

}
