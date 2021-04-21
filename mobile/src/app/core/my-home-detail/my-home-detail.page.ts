import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';

import { House } from 'src/app/shared/services/houses/houses.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { MediasService } from 'src/app/shared/services/medias/medias.service';

import { Areas } from 'src/assets/data/areas';
import { Occupants } from 'src/assets/data/occupants';

import * as moment from 'moment';

@Component({
  selector: 'app-my-home-detail',
  templateUrl: './my-home-detail.page.html',
  styleUrls: ['./my-home-detail.page.scss'],
})
export class MyHomeDetailPage implements OnInit {

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
  houseTypes = [
    { value: 'CD', text: 'Condominium' },
    { value: 'FL', text: 'Flat' },
    { value: 'TO', text: 'Townhouse' },
    { value: 'TE', text: 'Terrace House' },
    { value: 'BS', text: 'Bungalow / Semidetached' },
    { value: 'AS', text: 'Apartment / Service Apartment' }
  ]
  townOptions = Areas
  occupantOptions = Occupants

  // Checker
  isLoading: boolean = false
  isUploading: boolean = false

  // Data
  house: House
  imageSelected: string
  imageSelectedPreview: string

  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private mediaService: MediasService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private router: Router,
    private toastr: NotifyService
  ) { 
    this.house = this.router.getCurrentNavigation().extras as any
  }

  ngOnInit() {
    this.houseForm = this.fb.group({
      // owner: new FormControl(this.house['owner']['id'], Validators.compose([
      //   Validators.required
      // ])),
      address_1: new FormControl(this.house['address_1'], Validators.compose([
        Validators.required
      ])),
      address_2: new FormControl(this.house['address_2']),
      address_3: new FormControl(this.house['address_3']),
      postcode: new FormControl(this.house['postcode'], Validators.compose([
        Validators.required
      ])),
      town: new FormControl(this.house['town'], Validators.compose([
        Validators.required
      ])),
      building_type: new FormControl(this.house['building_type'], Validators.compose([
        Validators.required
      ])),
      assessment_tax_account: new FormControl(this.house['assessment_tax_account'], Validators.compose([
        Validators.required
      ])),
      assessment_tax_doc: new FormControl(this.house['assessment_tax_doc']['id'], Validators.compose([
        Validators.required
      ])),
      staying_since: new FormControl(this.house['staying_since'], Validators.compose([
        Validators.required
      ])),
      occupants: new FormControl(this.house['occupants'], Validators.compose([
        Validators.required
      ]))
    })

    console.log('Form: ', this.houseForm.value)
  }

  update() {
    let staying_since = this.houseForm.value.staying_since

    if (staying_since != this.house['staying_since']) {
      staying_since = moment(this.houseForm.value.staying_since).format('YYYY-MM-DD')
      this.houseForm.controls['staying_since'].setValue(staying_since)
    }

    this.isLoading = true
    this.houseService.update(this.house.id, this.houseForm.value).subscribe(
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
        this.toastr.openToastr('MyHome successfully updated')
        this.navigatePage('/core/my-home')
      }
    )
  }

  refresh() {
    let fieldOwner = 'owner=' + this.authService.userID
    if (this.authService.userID) {
      this.houseService.filter(fieldOwner).subscribe(
        () => {},
        () => {},
        () => {}
      )
    }
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
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
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

}
