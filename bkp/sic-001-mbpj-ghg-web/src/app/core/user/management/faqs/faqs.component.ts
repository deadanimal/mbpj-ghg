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

import { FAQ } from "src/app/shared/services/faqs/faqs.model";
import { FaqsService } from "src/app/shared/services/faqs/faqs.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
})
export class FaqsComponent implements OnInit {
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  focusQuestion;
  focusAnswer;

  faqForm = new FormGroup({
    id: new FormControl(""),
    question: new FormControl("", Validators.required),
    answer: new FormControl("", Validators.required),
  });

  faqValidationMessage = {
    question: [{ type: "required", message: "Question is required" }],
    answer: [{ type: "required", message: "Answer is required" }],
  };

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered",
    ignoreBackdropClick: true,
  };

  constructor(
    private faqService: FaqsService,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService
  ) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    this.faqService.doRetrieveAllFaqs().subscribe((res) => {
      this.tableRows = [...res];
      this.tableTemp = this.tableRows.map((prop, key) => {
        return {
          ...prop,
          no: key + 1,
        };
      });
    });
  }

  registerFAQ() {
    this.loadingBar.start();
    this.faqService.doCreateFaq(this.faqForm.value).subscribe(
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

  updateFAQ() {
    this.loadingBar.start();
    this.faqService
      .doUpdateFaq(this.faqForm.value, this.faqForm.value.id)
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

  deleteFAQ(row) {
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
          this.faqService.doDeleteFaq(row.id).subscribe(
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
    if (process == "register") this.faqForm.reset();
    else if (process == "update")
      this.faqForm.patchValue({
        ...row,
      });
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  closeModal() {
    this.faqForm.reset();
    this.defaultModal.hide();
  }

  successMessage(type: string) {
    if (type == "register") {
      let title = "Success";
      let message = "FAQ is registered";
      this.notifyService.openToastr(title, message);
    } else if (type == "update") {
      let title = "Success";
      let message = "FAQ is updated";
      this.notifyService.openToastr(title, message);
    } else if (type == "delete") {
      let title = "Success";
      let message = "FAQ is deleted";
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
