import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
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

import { Application } from "src/app/shared/services/applications/applications.model";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { Rebate } from "src/app/shared/services/rebates/rebates.model";
import { RebatesService } from "src/app/shared/services/rebates/rebates.service";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-rebates",
  templateUrl: "./rebates.component.html",
  styleUrls: ["./rebates.component.scss"],
})
export class RebatesComponent implements OnInit {
  // Focus
  focusPaymentDate;
  focusAmountApproved;
  focusApplicationID;

  // FormGroup
  rebateForm = new FormGroup({
    id: new FormControl(""),
    payment_date: new FormControl("", Validators.required),
    amount_approved: new FormControl("", Validators.required),
    application_id: new FormControl("", Validators.required),
  });

  // Modal
  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered",
    ignoreBackdropClick: true,
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  // Validation Message
  rebateValidationMessage = {
    payment_date: [{ type: "required", message: "Payment Date is required" }],
    amount_approved: [
      { type: "required", message: "Amount Approved is required" },
    ],
    application_id: [
      { type: "required", message: "Application ID is required" },
    ],
  };

  constructor(
    private applicationService: ApplicationsService,
    private rebateService: RebatesService,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService
  ) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    this.loadingBar.start();
    this.rebateService.doRetrieveAllExtendedRebates().subscribe((res) => {
      this.loadingBar.complete();
      this.tableRows = [...res];
      this.tableTemp = this.tableRows.map((prop, key) => {
        return {
          ...prop,
          no: key + 1,
        };
      });
    }, () => {
      this.loadingBar.complete();
    });
  }

  registerRebate() {
    this.loadingBar.start();
    this.rebateService.doCreateRebate(this.rebateForm.value).subscribe(
      (res) => {
        this.successMessage("register");
        this.loadingBar.complete();
      },
      () => {
        this.loadingBar.complete();
      },
      () => {
        this.closeModal();
        this.getData();
      }
    );
  }

  updateRebate() {
    this.loadingBar.start();
    this.rebateService
      .doUpdateRebate(this.rebateForm.value, this.rebateForm.value.id)
      .subscribe(
        () => {
          this.loadingBar.complete();
          this.successMessage("update");
        },
        () => {
          this.loadingBar.complete();
        },
        () => {
          this.closeModal();
          this.getData();
        }
      );
  }

  deleteRebate(row) {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false,
      })
      .then((result) => {
        this.loadingBar.start();
        if (result.value) {
          this.rebateService.doDeleteRebate(row.id).subscribe(
            () => {
              this.loadingBar.complete();
              this.successMessage("delete");
            },
            () => {
              this.loadingBar.complete();
            },
            () => {
              this.getData();
            }
          );
        }
      });
  }

  openModal(modalDefault: TemplateRef<any>, process: string, row) {
    if (process == "register") this.rebateForm.reset();
    else if (process == "update")
      this.rebateForm.patchValue({
        ...row,
      });
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  closeModal() {
    this.rebateForm.reset();
    this.defaultModal.hide();
  }

  successMessage(type: string) {
    if (type == "register") {
      let title = "Success";
      let message = "Rebate is registered";
      this.notifyService.openToastr(title, message);
    } else if (type == "update") {
      let title = "Success";
      let message = "Rebate is updated";
      this.notifyService.openToastr(title, message);
    } else if (type == "delete") {
      let title = "Success";
      let message = "Rebate is deleted";
      this.notifyService.openToastr(title, message);
    }
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }
}
