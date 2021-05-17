import {
  Component,
  OnInit,
  TemplateRef,
  NgZone,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

import { ToastrService } from "ngx-toastr";
import { LoadingBarService } from "@ngx-loading-bar/core";

import { TicketQuestionsService } from "src/app/shared/services/ticket-questions/ticket-questions.service";
import { TicketAnswersService } from "src/app/shared/services/ticket-answers/ticket-answers.service";
import { TicketQuestion } from "src/app/shared/services/ticket-questions/ticket-questions.model";
import { TicketAnswer } from "src/app/shared/services/ticket-answers/ticket-answers.model";

import { UsersService } from "src/app/shared/services/users/users.service";
import { User } from "src/app/shared/services/users/users.model";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

class NewTicketQuestion {
  id: string;
  question: string;
  submitted_by_id: string;
  submitted_by_name: string;
  status: string;
  date_submitted: string;
}

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-helpdesk",
  templateUrl: "./helpdesk.component.html",
  styleUrls: ["./helpdesk.component.scss"],
})
export class HelpdeskComponent implements OnInit {
  // Data
  users: User[] = [];
  questions: TicketQuestion[] = [];
  answers: TicketAnswer[] = [];
  tempQuestions: NewTicketQuestion[] = [];
  selectedQuestion;
  selectedAnswer;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: NewTicketQuestion[] = [];
  SelectionType = SelectionType;

  // Form
  answerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private ticketAnswerService: TicketAnswersService,
    private ticketQuestionService: TicketQuestionsService,
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService,
    private notifyService: NotifyService,
    public toastr: ToastrService,
    private zone: NgZone
  ) {
    // this.mergeData()
    this.getData();
  }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answer: new FormControl(""),
      question_id: new FormControl(""),
      submitted_by: new FormControl(""),
    });
  }

  getData() {
    this.ticketQuestionService.getAll().subscribe(
      () => {},
      () => {},
      () => {
        this.ticketAnswerService.getAll().subscribe(
          () => {},
          () => {},
          () => {
            this.userService.getAll().subscribe(
              () => {},
              () => {},
              () => {
                this.mergeData();
              }
            );
          }
        );
      }
    );
  }

  mergeData() {
    this.tempQuestions = [];
    this.questions = this.ticketQuestionService.questions;
    this.answers = this.ticketAnswerService.answers;
    this.users = this.userService.users;
    let counter: number = 0;
    // console.log('questions', this.questions)
    // console.log('answers', this.answers)

    this.questions.forEach((question: TicketQuestion) => {
      this.users.forEach((user: User) => {
        if (question.submitted_by == user.id) {
          this.tempQuestions.push({
            id: question.id,
            question: question.question,
            submitted_by_id: question.submitted_by,
            submitted_by_name: user.full_name,
            status: question.status,
            date_submitted: question.date_submitted,
          });
        }
      });
      counter++;
      if (counter === this.questions.length) {
        this.tableRows = [...this.tempQuestions];
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            no: key + 1,
          };
        });
        // console.log('Svc: ', this.tableTemp)
      }
    });
  }

  openModal(modalRef: TemplateRef<any>, ticket) {
    this.selectedQuestion = ticket;
    this.answers.forEach((answer) => {
      if (answer.question_id == this.selectedQuestion.id) {
        this.selectedAnswer = answer;
      }
    });
    this.modal = this.modalService.show(modalRef, this.modalConfig);
    // console.log('open a: ', this.selectedAnswer)
    // console.log('open q: ', this.selectedQuestion)
  }

  closeModal() {
    delete this.selectedAnswer;
    delete this.selectedQuestion;
    this.answerForm.reset();
    this.modal.hide();
    //console.log('closed a: ', this.selectedAnswer)
    //console.log('closed q: ', this.selectedQuestion)
  }

  reply() {
    this.loadingBar.start();

    this.answerForm.value.question_id = this.selectedQuestion.id;

    this.ticketAnswerService.create(this.answerForm.value).subscribe(
      (res) => {
        this.changeStatus(res.question_id);
        this.closeModal();
      },
      () => {
        this.loadingBar.complete();
        this.closeModal();
      },
      () => {
        this.loadingBar.complete();
      }
    );
  }

  successMessage() {
    let title = "Success";
    let message = "Notification has been sent to the applicant";
    this.notifyService.openToastr(title, message);
  }

  changeStatus(tickedId: String) {
    let id = tickedId;
    this.ticketQuestionService.resolve(id).subscribe(
      (res) => {
        console.log("Tolong la jadi");
      },
      () => {},
      () => {
        this.successMessage();
        this.getData();
      }
    );
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
