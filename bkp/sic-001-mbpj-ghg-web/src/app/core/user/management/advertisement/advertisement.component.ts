import { Component, OnInit, NgZone, TemplateRef } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import swal from "sweetalert2";

import { LoadingBarService } from "@ngx-loading-bar/core";
import { ToastrService } from "ngx-toastr";

import { NotifyService } from "src/app/shared/handler/notify/notify.service";

import { Advertisement } from "src/app/shared/services/advertisement/advertisement.model";
import { AdvertisementService } from "src/app/shared/services/advertisement/advertisement.service";

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {
  public Advertisements: Advertisement[] = [];

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];

  focusTitle;
  focusImage;
  focusStatus;


  FormGroupAdvertisement = new FormGroup(
    {
      ads_title: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      ads_image: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      status: new FormControl(Validators.compose([Validators.required])),
    },
    
  );

  // modal config
  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered",
    ignoreBackdropClick: true,
  };


  constructor(
    private adsService: AdvertisementService,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService,
    private zone: NgZone
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.adsService.doRetrieveAllAdvertisements().subscribe((res) => {
      this.tableRows = res.reverse();
      this.tableTemp = this.tableRows.map((prop, key) => {
        return {
          ...prop,
          no: key + 1,
        };
      });
    });
  }

    onChange(event, type: string) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        if (type == "image_link") {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
              console.log(reader.result);
              this.FormGroupAdvertisement.get('ads_image').setValue(reader.result);
          };
        }
      }
    }

  submit() {
    console.log(this.FormGroupAdvertisement.value);

    
    this.adsService.doCreateAdvertisement(this.FormGroupAdvertisement.value).subscribe(
      (res) => {
        console.log("post method ads", res)
        this.getData();
        this.defaultModal.hide();
      },
      (err) => {
        console.log("post method err", err)
      }
    );
  }




 

  openModalAddAdvertisement(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }


  toggleAdsStatus(row) {
    this.adsService.doUpdateAdvertisement({"status": `${!row.status}`}, row.id).subscribe(
      () => {},
      () => {},
      () => {
        this.getData();
      }
      
    );

  }

  deleteAds(row) {
    this.adsService.doDeleteAdvertisement(row.id).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      },
      () => {
        this.getData();
      }
    );
  }

}
