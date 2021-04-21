import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { User } from 'src/app/shared/services/users/users.model';
import { Media } from 'src/app/shared/services/medias/medias.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { MediasService } from 'src/app/shared/services/medias/medias.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  // Checker
  isEdit = false
  isSaving = false
  isUploading = false

  // Data
  user: User
  userTemp: User
  nric_media: Media
  img: any
  imageSelected: string
  imageSelectedPreview: string

  // Form
  userForm: FormGroup
  mediaForm: FormGroup

  // Subscription
  subscription

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private mediaService: MediasService,
    private userService: UsersService,
    private fb: FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private camera: Camera,
    private toastr: NotifyService,
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      full_name: new FormControl(this.user?.full_name, Validators.compose([
        Validators.required
      ])),
      email: new FormControl(this.user?.email),
      nric_old: new FormControl(this.user?.nric_old),
      nric_new: new FormControl(this.user?.nric_new, Validators.compose([
        Validators.required
      ])),
      nric_doc: new FormControl(Validators.compose([
        Validators.required
      ])),
      mobile: new FormControl(this.user?.mobile, Validators.compose([
        Validators.required
      ])),
      phone: new FormControl(this.user?.phone, Validators.compose([
        Validators.required
      ])),
      occupation: new FormControl(this.user?.occupation),
      gender: new FormControl(this.user?.gender)
    })

    this.mediaForm = this.fb.group({
      document: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  getData() {
    this.user = this.userService.userCurrent
    this.userTemp = this.userService.userCurrent

    if (this.user && !this.user.nric_new) {
      this.user.nric_new = this.user.username
    }

    if (this.user && this.user.gender) {
      if (this.userTemp.gender == 'ML') {
        this.userTemp.gender = 'Male'
      }
      else if (this.userTemp.gender == 'FM') {
        this.userTemp.gender = 'Female'
      }
      else if (this.userTemp.gender == 'NA') {
        this.userTemp.gender = 'Not Available'
      }
    }

    if (this.user && this.user.nric_doc) {
      this.mediaService.get(this.user.id).subscribe(
        () => {},
        () => {},
        () => {
          this.nric_media = this.mediaService.media
        }
      )
    }
  }

  ionViewDidEnter() {
    if (
      !this.user?.full_name &&
      !this.user?.mobile && 
      !this.user?.phone && 
      !this.user?.nric_doc
    ) {
      this.subscription = this.platform.backButton.subscribeWithPriority(9999,() => {
        // do nothing
      })
    }
  }

  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  edit() {
    this.isEdit = true
  }

  save() {
    this.isSaving = true
    
    if (!this.userForm.value.full_name) {
      this.userForm.controls['full_name'].setValue(this.user.full_name)
    }
    if (!this.userForm.value.email) {
      this.userForm.controls['email'].setValue(this.user.email)
    }
    if (!this.userForm.value.nric_old) {
      this.userForm.controls['nric_old'].setValue(this.user.nric_old)
    }
    if (!this.userForm.value.nric_new) {
      this.userForm.controls['nric_new'].setValue(this.user.username)
    }
    if (!this.userForm.value.nric_doc) {
      this.userForm.controls['nric_doc'].setValue(this.user.nric_doc)
    }
    if (!this.userForm.value.mobile) {
      this.userForm.controls['mobile'].setValue(this.user.mobile)
    }
    if (!this.userForm.value.phone) {
      this.userForm.controls['phone'].setValue(this.user.phone)
    }
    if (!this.userForm.value.occupation) {
      this.userForm.controls['occupation'].setValue(this.user.occupation)
    }
    if (!this.userForm.value.gender) {
      this.userForm.controls['gender'].setValue(this.user.gender)
    }

    this.submit()
  }

  submit() {
    console.log(this.userForm.value)
    this.userService.update(this.user.id, this.userForm.value).subscribe(
      () => {
        // this.userForm.reset()
      },
      () => {
        this.isSaving = false
        this.toastr.openToastrError('Error, please try again later')
      },
      () => {
        this.isSaving = false
        this.refresh()
      }
    )
  }

  refresh() {
    this.userService.getCurrentUser(this.user['id']).subscribe(
      () => {},
      () => {},
      () => {
        this.getData()
      }
    )
  }

  async openUploadSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload NRIC / passport',
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
          this.imageSelected = 'data:image/jpeg;base64,' + file_uri
          this.imageSelectedPreview = 'data:image/jpeg;base64,' + file_uri
          this.mediaForm.controls['document'].setValue(this.imageSelected)
          this.uploadDocument()
          // console.log('control: ', this.userForm.value.nric_doc)
          // console.log('imgFile', this.imageSelected)
          // this.imageSelectedPreview = 'data:image/jpeg;base64,' + this.imageSelected
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
      this.imageSelected = 'data:image/jpeg;base64,' + imageData;
      this.imageSelectedPreview = 'data:image/jpeg;base64,' + imageData;
      // this.imageSelectedPreview = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected);
      this.mediaForm.controls['document'].setValue(this.imageSelected)
      this.uploadDocument()
    }, (err) => {
      alert('error ' + JSON.stringify(err))
    })
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
        this.userForm.controls['nric_doc'].setValue(this.mediaService.media.id)
      }
    )
  }

}
