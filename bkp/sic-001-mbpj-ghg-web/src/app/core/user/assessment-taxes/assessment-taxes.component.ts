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

import { AssessmentAspect } from "src/app/shared/services/assessment-aspects/assessment-aspects.model";
import { AssessmentAspectsService } from "src/app/shared/services/assessment-aspects/assessment-aspects.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-assessment-taxes",
  templateUrl: "./assessment-taxes.component.html",
  styleUrls: ["./assessment-taxes.component.scss"],
})
export class AssessmentTaxesComponent implements OnInit {
  // Dropdown
  dropdownAspectTypes = [
    {
      value: "EN",
      display_name: "Energy",
    },
    {
      value: "WA",
      display_name: "Water",
    },
    {
      value: "TR",
      display_name: "Transportation",
    },
    {
      value: "BI",
      display_name: "Biodiversity",
    },
    {
      value: "WE",
      display_name: "Waste",
    },
  ];

  // Focus
  focusName;
  focusAspectType;
  focusAspect;
  focusIncentive;

  // FormGroup
  assessmentAspectForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", Validators.required),
    aspect_type: new FormControl("", Validators.required),
    aspect: new FormControl("", Validators.required),
    incentive: new FormControl(0, Validators.required),
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
  assessmentAspectValidationMessage = {
    name: [{ type: "required", message: "Name is required" }],
    aspect_type: [{ type: "required", message: "Aspect Type is required" }],
    aspect: [{ type: "required", message: "Aspect is required" }],
    incentive: [{ type: "required", message: "Incentive is required" }],
  };

  constructor(
    private assessmentaspectService: AssessmentAspectsService,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService
  ) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    this.assessmentaspectService
      .doRetrieveAllAssessmentAspects()
      .subscribe((res) => {
        this.tableRows = [...res];
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            no: key + 1,
          };
        });
      });
  }

  registerAssessmentTax() {
    this.loadingBar.start();
    this.assessmentaspectService
      .doCreateAssessmentAspect(this.assessmentAspectForm.value)
      .subscribe(
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

  updateAssessmentTax() {
    this.loadingBar.start();
    this.assessmentaspectService
      .doUpdateAssessmentAspect(
        this.assessmentAspectForm.value,
        this.assessmentAspectForm.value.id
      )
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

  deleteAssessmentTax(row) {
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
          this.assessmentaspectService
            .doDeleteAssessmentAspect(row.id)
            .subscribe(
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
    if (process == "register") this.assessmentAspectForm.reset();
    else if (process == "update")
      this.assessmentAspectForm.patchValue({
        ...row,
      });
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  closeModal() {
    this.assessmentAspectForm.reset();
    this.defaultModal.hide();
  }

  successMessage(type: string) {
    if (type == "register") {
      let title = "Success";
      let message = "Assessment Tax is registered";
      this.notifyService.openToastr(title, message);
    } else if (type == "update") {
      let title = "Success";
      let message = "Assessment Tax is updated";
      this.notifyService.openToastr(title, message);
    } else if (type == "delete") {
      let title = "Success";
      let message = "Assessment Tax is deleted";
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

  getAspectType(value: string) {
    let result = this.dropdownAspectTypes.find((obj) => {
      return obj.value == value;
    });
    return result.display_name;
  }
}
