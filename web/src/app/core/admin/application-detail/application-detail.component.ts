import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationTemp } from 'src/app/shared/services/applications/applications.model';
import swal from 'sweetalert2';

import * as moment from 'moment';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {

  // Application
  application: any

  // Checker
  isEmpty: boolean = true
  isCompleted: boolean = false

  constructor(
    private router: Router
  ) { 
    this.application = this.router.getCurrentNavigation().extras as any

    if (!this.application) {
      this.router.navigate(['/admin/applications'])
    }
  }

  ngOnInit() {
    this.initData()
  }

  initData() {
    if (this.application.id) {
      if (this.application.status == 'CM') {
        this.isCompleted = true
      }
      else {
        this.isCompleted = false
      }
    }
    // else if () {

    // }
    else {
      this.isEmpty = true
    }
  }

  confirmApprove() {
    swal.fire({
      title: "Here's a message!",
      text: "A few words about this sweet alert ...",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-primary"
    });
  }

  confirmReject() {
    swal.fire({
      title: "Here's a message!",
      text: "A few words about this sweet alert ...",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-primary"
    });
  }

  confirm(type: string) {
    let title = 'Confirmation'
    let message = ''
    
    if (type == 'approve') {
      message = 'Are you sure to approve this application?'

      swal.fire({
        title: title,
        text: message,
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-primary"
      });
    }
    else if (type == 'reject') {
      message = 'Are you sure to reject this application?'

      swal.fire({
        title: title,
        text: message,
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-primary"
      });
    }

    
  }

}
