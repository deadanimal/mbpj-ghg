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

import { CarbonEmissionFactor } from "src/app/shared/services/carbon-emission-factors/carbon-emission-factors.model";
import { CarbonEmissionFactorsService } from "src/app/shared/services/carbon-emission-factors/carbon-emission-factors.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-carbon-emission-factors",
  templateUrl: "./carbon-emission-factors.component.html",
  styleUrls: ["./carbon-emission-factors.component.scss"],
})
export class CarbonEmissionFactorsComponent implements OnInit {
  // Dropdown
  year2011tocurrentyear = [];

  // Focus
  focusElectricCarbonEmissionFactor;
  focusWaterCarbonEmissionFactor;
  focusYear;

  // FormGroup
  carbonEmissionFactorForm = new FormGroup({
    id: new FormControl(""),
    electric_carbon_emission_factor: new FormControl(0, Validators.required),
    water_carbon_emission_factor: new FormControl(0, Validators.required),
    year: new FormControl("", Validators.required),
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
  carbonEmissionFactorValidationMessage = {
    electric_carbon_emission_factor: [
      {
        type: "required",
        message: "Electric carbon emission factor is required",
      },
    ],
    water_carbon_emission_factor: [
      { type: "required", message: "Water carbon emission factor is required" },
    ],
    year: [{ type: "required", message: "Year is required" }],
  };

  constructor(
    private carbonemissionfactorService: CarbonEmissionFactorsService,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService
  ) {
    // loop through data from 2011 to 2021
    let currentyear = new Date().getFullYear();
    let loop = currentyear - 2011;
    for (let i = 0; i < loop + 1; i++) {
      let obj = {
        value: 2011 + i,
        display_name: (2011 + i).toString(),
      };
      this.year2011tocurrentyear.push(obj);
    }

    this.getData();
  }

  ngOnInit() {}

  getData() {
    this.carbonemissionfactorService
      .doRetrieveAllCarbonEmissionFactors()
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

  registerCarbon() {
    this.loadingBar.start();
    this.carbonemissionfactorService
      .doCreateCarbonEmissionFactor(this.carbonEmissionFactorForm.value)
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

  updateCarbon() {
    this.loadingBar.start();
    this.carbonemissionfactorService
      .doUpdateCarbonEmissionFactor(
        this.carbonEmissionFactorForm.value,
        this.carbonEmissionFactorForm.value.id
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

  deleteCarbon(row) {
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
          this.carbonemissionfactorService
            .doDeleteCarbonEmissionFactor(row.id)
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
    if (process == "register") this.carbonEmissionFactorForm.reset();
    else if (process == "update")
      this.carbonEmissionFactorForm.patchValue({
        ...row,
      });
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  closeModal() {
    this.carbonEmissionFactorForm.reset();
    this.defaultModal.hide();
  }

  successMessage(type: string) {
    if (type == "register") {
      let title = "Success";
      let message = "Carbon emission factor is registered";
      this.notifyService.openToastr(title, message);
    } else if (type == "update") {
      let title = "Success";
      let message = "Carbon emission factor is updated";
      this.notifyService.openToastr(title, message);
    } else if (type == "delete") {
      let title = "Success";
      let message = "Carbon emission factor is deleted";
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
