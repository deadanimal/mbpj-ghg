import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subscription } from 'rxjs';
import { TicketTemp } from 'src/app/shared/services/tickets/tickets.model';
import { TicketsService } from 'src/app/shared/services/tickets/tickets.service';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.scss']
})
export class HelpdeskComponent implements OnInit {

  // Data
  tickets: TicketTemp[] = []

  // Table
  tableEntries: number = 5
  tableSelected: any[] = []
  tableTemp = []
  tableActiveRow: any
  tableRows: any = []
  tableMessages = {
    emptyMessage: 'No records found',
    totalMessage: 'record'
  }
  SelectionType = SelectionType;

  // Checker
  isEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Subscriber
  subscription: Subscription

  constructor(
    private ticketService: TicketsService,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getData() {
    this.loadingBar.start()
    this.subscription = this.ticketService.getAll().subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {}
    )
  }

  loadTable() {
    this.tableRows = this.tickets
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop
      };
    });

    if (this.tableTemp.length >= 1) {
      this.isEmpty = false
    }
    else {
      this.isEmpty = true
    }
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function (d) {
      return d.staff_name.toLowerCase().indexOf(val)!== -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  navigatePage(path: string, selectedTicket) {
    let extras = selectedTicket
    this.router.navigate([path], extras)
  }

}
