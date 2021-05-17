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

import { User } from "src/app/shared/services/users/users.model";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { UsersService } from "src/app/shared/services/users/users.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  public tempApplicants: User[] = [];
  public tempEvaluators: User[] = [];
  public tempUser: User;

  // Chart
  chart: any;

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  focus;

  focusNRIC;
  focusPassword;
  focusConfirmPassword;
  focusFullName;
  focusEmail;
  focusPhone;
  focusUserType;

  userRegistrationForm = new FormGroup(
    {
      username: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
          Validators.pattern("^[0-9]*$"),
        ])
      ),
      password1: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"),
        ])
      ),
      password2: new FormControl("", Validators.compose([Validators.required])),
    },
    {
      validators: this.passwordConfirming,
    }
  );

  userInformationForm = new FormGroup({
    email: new FormControl("", Validators.compose([Validators.email])),
    full_name: new FormControl("", Validators.compose([Validators.required])),
    phone: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
      ])
    ),
    new_nric: new FormControl(""),
    user_type: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.minLength(2)])
    ),
    username: new FormControl(""),
    is_active: new FormControl(true),
  });

  userRegistrationValidationMessage = {
    username: [
      { type: "required", message: "NRIC is required" },
      { type: "maxlength", message: "NRIC is too long" },
      { type: "minlength", message: "NRIC is too short" },
      { type: "pattern", message: "NRIC must consist of numbers only" },
    ],
    password1: [
      { type: "required", message: "Password is required" },
      {
        type: "pattern",
        message:
          "Password must have at least one uppercase letter, one lowercase letter, one number, and eight character",
      },
    ],
    password2: [{ type: "required", message: "Confirm password is required" }],
  };

  userInformationValidationMessage = {
    phone: [
      { type: "required", message: "Phone is required" },
      { type: "minlength", message: "Opsie, too short" },
      { type: "maxlength", message: "Eh, too long" },
      { type: "pattern", message: "Numbers only.." },
    ],
    email: [{ type: "email", message: "Need a valid email.." }],
    full_name: [{ type: "required", message: "Please enter full name" }],
    user_type: [{ type: "required", message: "User type is required" }],
  };

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get("password1").value !== c.get("password2").value) {
      return { invalid: true };
    }
  }

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered",
    ignoreBackdropClick: true,
  };

  tableColumns: string[] = [
    "full_name",
    "new_nric",
    "phone",
    "is_active",
    "user_type",
    "id",
  ];

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService,
    private zone: NgZone
  ) {
    this.getData();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  getData() {
    this.userService.getAll().subscribe((res) => {
      this.tableRows = [...res];
      this.tableTemp = this.tableRows.map((prop, key) => {
        return {
          ...prop,
          no: key + 1,
        };
      });
    });

    this.userService.getStatistics().subscribe(
      () => {},
      () => {},
      () => {
        this.initChart();
      }
    );
  }

  initChart() {
    let chart = am4core.create("chart-user-month", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        month: "Jan",
        count: this.userService.userStatistics["total_current_jan"],
      },
      {
        month: "Feb",
        count: this.userService.userStatistics["total_current_feb"],
      },
      {
        month: "Mar",
        count: this.userService.userStatistics["total_current_mar"],
      },
      {
        month: "Apr",
        count: this.userService.userStatistics["total_current_apr"],
      },
      {
        month: "May",
        count: this.userService.userStatistics["total_current_may"],
      },
      {
        month: "Jun",
        count: this.userService.userStatistics["total_current_jun"],
      },
      {
        month: "Jul",
        count: this.userService.userStatistics["total_current_jul"],
      },
      {
        month: "Aug",
        count: this.userService.userStatistics["total_current_aug"],
      },
      {
        month: "Sep",
        count: this.userService.userStatistics["total_current_sep"],
      },
      {
        month: "Oct",
        count: this.userService.userStatistics["total_current_oct"],
      },
      {
        month: "Nov",
        count: this.userService.userStatistics["total_current_nov"],
      },
      {
        month: "Dec",
        count: this.userService.userStatistics["total_current_dec"],
      },
    ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if (target.dataItem && target.dataItem.index && 2 == 2) {
          return dy + 25;
        }
        return dy;
      }
    );

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "count";
    series.dataFields.categoryX = "month";
    series.name = "count";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart = chart;
  }

  registerUser() {
    this.userInformationForm.value.new_nric = this.userRegistrationForm.value.username;
    //console.log(this.userRegistrationForm.value)
    //console.log(this.userInformationForm.value)
    this.loadingBar.start();

    this.authService.register(this.userRegistrationForm.value).subscribe(
      (res) => {
        //console.log('Registration success: ', res)
        this.updateNewUser(res.user);
      },
      () => {
        //console.log('Registration unsuccessful')
        this.loadingBar.complete();
      },
      () => {
        //console.log('After that')
      }
    );
  }

  updateNewUser(user) {
    this.userInformationForm.value.new_nric = this.userRegistrationForm.value.username;
    this.userInformationForm.value.username = this.userRegistrationForm.value.username;
    this.userService.update(this.userInformationForm.value, user.pk).subscribe(
      () => {
        this.successMessage("register");
        this.loadingBar.complete();
      },
      () => {
        this.loadingBar.complete();
      },
      () => {
        this.closeModalRegister();
        this.getData();
      }
    );
  }

  updateRegisteredUser() {
    this.loadingBar.start();
    //console.log(this.userInformationForm.value)
    //this.userInformationForm.value.new_nric = this.userInformationForm.value.username
    this.userService
      .update(this.userInformationForm.value, this.tempUser.id)
      .subscribe(
        () => {
          this.loadingBar.complete();
          this.successMessage("update");
        },
        () => {
          this.loadingBar.complete();
        },
        () => {
          this.closeModalView();
          this.getData();
        }
      );
  }

  deleteRegisteredUser(row) {
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
          this.userService.delete(row.id).subscribe(
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

  openModalRegister(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  closeModalRegister() {
    this.userRegistrationForm.reset();
    this.userInformationForm.reset();
    this.defaultModal.hide();
  }

  async openModalView(modalDefault: TemplateRef<any>, user) {
    this.tempUser = user;
    this.userInformationForm.setValue({
      email: this.tempUser.email,
      full_name: this.tempUser.full_name,
      phone: this.tempUser.phone,
      new_nric: this.tempUser.new_nric,
      user_type: this.tempUser.user_type,
      is_active: this.tempUser.is_active,
      username: this.tempUser.username,
    });
    this.defaultModal = this.modalService.show(modalDefault, this.default);
    //console.log(this.userInformationForm.value.email)
    //console.log(this.userInformationForm)
    //console.log(user)
  }

  closeModalView() {
    if (this.tempUser) {
      delete this.tempUser;
    }
    this.userInformationForm.reset();
    this.defaultModal.hide();
  }

  successMessage(type: string) {
    if (type == "register") {
      let title = "Success";
      let message = "User is registered";
      this.notifyService.openToastr(title, message);
    } else if (type == "update") {
      let title = "Success";
      let message = "User is updated";
      this.notifyService.openToastr(title, message);
    } else if (type == "delete") {
      let title = "Success";
      let message = "User is deleted";
      this.notifyService.openToastr(title, message);
    }
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
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
