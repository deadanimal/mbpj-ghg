import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';

import { ApplicationEventsService } from 'src/app/shared/services/application-events/application-events.service';
import { HouseEventsService } from 'src/app/shared/services/house-events/house-events.service';
import { TicketEventsService } from 'src/app/shared/services/ticket-events/ticket-events.service';
import { UserEventsService } from 'src/app/shared/services/user-events/user-events.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

import { User } from 'src/app/shared/services/users/users.model';
import { UserEvent } from 'src/app/shared/services/user-events/user-events.model';
import { ApplicationEvent } from 'src/app/shared/services/application-events/application-events.model';
import { HouseEvent } from 'src/app/shared/services/house-events/house-events.model';
import { TicketEvent } from 'src/app/shared/services/ticket-events/ticket-events.model';

import * as moment from 'moment';
import { TabDirective } from 'ngx-bootstrap';

class MergedAudit {
  public id: string
  public no:number
  public action: string
  public action_by_id: string
  public action_by_name: string
  public date_time: string

  constructor(
    id: string,
    no: number,
    action: string,
    action_by_id: string,
    action_by_name: string,
    date_time: string
  ){
    this.id = id
    this.no = no
    this.action = action
    this.action_by_id = action_by_id
    this.action_by_name = action_by_name
    this.date_time = date_time
  }
}

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  // Data
  users: User[] = []
  userEventsMerged: MergedAudit[] = []
  applicationsEventMerged: MergedAudit[] = []
  houseEventsMerged: MergedAudit[] = []
  ticketEventsMerged: MergedAudit[] = []

  // Table
  tableEntriesUsers: number = 5;
  tableSelectedUsers: any[] = [];
  tableTempUsers = [];
  tableActiveRowUsers: any;
  tableRowsUsers: MergedAudit[] = []
  selectionTypeUsers = SelectionType;

  tableEntriesApplications: number = 5;
  tableSelectedApplications: any[] = [];
  tableTempApplications = [];
  tableActiveRowApplications: any;
  tableRowsApplications: MergedAudit[] = []
  SelectionTypeApplications = SelectionType;

  tableEntriesHouses: number = 5;
  tableSelectedHouses: any[] = [];
  tableTempHouses = [];
  tableActiveRowHouses: any;
  tableRowsHouses: MergedAudit[] = []
  SelectionTypeHouses = SelectionType;

  tableEntriesTickets: number = 5;
  tableSelectedTickets: any[] = [];
  tableTempTickets = [];
  tableActiveRowTickets: any;
  tableRowsTickets: MergedAudit[] = []
  SelectionTypeTickets = SelectionType;

  constructor(
    private applicationEventService: ApplicationEventsService,
    private houseEventService: HouseEventsService,
    private ticketEventService: TicketEventsService,
    private userEventService: UserEventsService,
    private userService: UsersService,
    public toastr: ToastrService
  ) {
    this.users = this.userService.users
    this.getData()
    // this.mergeData()
  }

  ngOnInit() {
    // this.initTable()
  }

  ngViewAfterInit() {
  }

  getData() {
    this.ticketEventService.getAll().subscribe(
      () => {
        // Success
      },
      () => {
        // Denied
      },
      () => {
        // After
        this.mergeTickets()
      }
    )
    this.applicationEventService.getAll().subscribe(
      () => {
        // Success
      },
      () => {
        // Denied
      },
      () => {
        // After
        this.mergeApplications()
      }
    )
    this.houseEventService.getAll().subscribe(
      () => {
        // Success
      },
      () => {
        // Denied
      },
      () => {
        // After
        this.mergeHouses()
      }
    )
    this.userEventService.getAll().subscribe(
      () => {
        // Success
      },
      () => {
        // Denied
      },
      () => {
        // After
        this.mergeUsers()
      }
    )
  }

  mergeTickets() {
    let counter = 0
    this.ticketEventService.events.forEach(
      (ticket: TicketEvent) => {
        if (ticket.action_by) {
          this.users.forEach(
            (user: User) => {
              if (user.id == ticket.action_by) {
                this.ticketEventsMerged.push({
                  id: ticket.id,
                  no: counter+1,
                  action: ticket.action,
                  action_by_id: ticket.action_by,
                  action_by_name: user.full_name,
                  date_time: moment(ticket.date_time).format('DD/MM/YYYY')
                })
              }
            }
          )
        }
        else {
          this.ticketEventsMerged.push({
            id: ticket.id,
            no: counter+1,
            action: ticket.action,
            action_by_id: ticket.action_by,
            action_by_name: 'NA',
            date_time: moment(ticket.date_time).format('DD/MM/YYYY')
          })
        }
        counter++
        if (counter === this.ticketEventService.events.length){
          console.log('Ticket: ', this.ticketEventsMerged)
          this.tableRowsTickets = [...this.ticketEventsMerged]
          this.tableTempTickets = this.tableRowsTickets.map((prop, key) => {
            return {
              ...prop,
              id: key
            };
          });
        }
      }
    )
  }

  mergeApplications() {
    let counter = 0
    this.applicationEventService.events.forEach(
      (application: ApplicationEvent) => {
        if (application.action_by) {
          this.users.forEach(
            (user: User) => {
              if (user.id == application.action_by) {
                this.applicationsEventMerged.push({
                  id: application.id,
                  no: counter+1,
                  action: application.action,
                  action_by_id: application.action_by,
                  action_by_name: user.full_name,
                  date_time: moment(application.date_time).format('DD/MM/YYYY')
                })
              }
            }
          )
        }
        else {
          this.applicationsEventMerged.push({
            id: application.id,
            no: counter+1,
            action: application.action,
            action_by_id: application.action_by,
            action_by_name: 'NA',
            date_time: moment(application.date_time).format('DD/MM/YYYY')
          })
        }
        counter++
        if (counter === this.applicationEventService.events.length){
          console.log('Application: ', this.applicationsEventMerged)
          this.tableRowsApplications = [...this.applicationsEventMerged]
          this.tableTempApplications = this.tableRowsApplications.map((prop, key) => {
            return {
              ...prop,
              id: key
            };
          });
          console.log('Application: ', this.applicationsEventMerged)
        }
      }
    )
  }

  mergeHouses() {
    let counter = 0
    this.houseEventService.events.forEach(
      (house: HouseEvent) => {
        if (house.action_by) {
          this.users.forEach(
            (user: User) => {
              if (user.id == house.action_by) {
                this.houseEventsMerged.push({
                  id: house.id,
                  no: counter+1,
                  action: house.action,
                  action_by_id: house.action_by,
                  action_by_name: user.full_name,
                  date_time: moment(house.date_time).format('DD/MM/YYYY')
                })
              }
            }
          )
        }
        else {
          this.houseEventsMerged.push({
            id: house.id,
            no: counter+1,
            action: house.action,
            action_by_id: house.action_by,
            action_by_name: 'NA',
            date_time: moment(house.date_time).format('DD/MM/YYYY')
          })
        }
        counter++
        if (counter === this.houseEventService.events.length){
          console.log('House: ', this.houseEventsMerged)
          this.tableRowsHouses = [...this.houseEventsMerged]
          this.tableTempHouses = this.tableRowsHouses.map((prop, key) => {
            return {
              ...prop,
              id: key
            };
          });
        }
      }
    )
  }

  mergeUsers() {
    let counter = 0
    this.userEventService.events.forEach(
      (event: UserEvent) => {
        if (event.action_by) {
          this.users.forEach(
            (user: User) => {
              if (user.id == event.action_by) {
                this.userEventsMerged.push({
                  id: event.id,
                  no: counter+1,
                  action: event.action,
                  action_by_id: event.action_by,
                  action_by_name: user.full_name,
                  date_time: moment(event.date_time).format('DD/MM/YYYY')
                })
              }
            }
          )
        }
        else {
          this.userEventsMerged.push({
            id: event.id,
            no: counter+1,
            action: event.action,
            action_by_id: event.action_by,
            action_by_name: 'NA',
            date_time: moment(event.date_time).format('DD/MM/YYYY')
          })
        }
        counter++
        if (counter === this.userEventService.events.length){
          console.log('User: ', this.userEventsMerged)
          this.tableRowsUsers = [...this.userEventsMerged]
          this.tableTempUsers = this.tableRowsUsers.map((prop, key) => {
            return {
              ...prop,
              id: key
            };
          });
        }
      }
    )
  }

  entriesChange($event, tableType: string) {
    if (tableType == 'ticket') {
      this.tableEntriesTickets = $event.target.value;
    }
    else if (tableType == 'application') {
      this.tableEntriesApplications = $event.target.value;
    }
    else if (tableType == 'house') {
      this.tableEntriesHouses = $event.target.value;
    }
    else if (tableType == 'user') {
      this.tableEntriesUsers = $event.target.value;
    }
  }

  filterTable($event, tableType: string) {
    if (tableType == 'ticket') {
      let val = $event.target.value;
      this.tableTempTickets = this.tableRowsTickets.filter(function(d) {
        for (var key in d) {
          if (d[key].toLowerCase().indexOf(val) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
    else if (tableType == 'application') {
      let val = $event.target.value;
      this.tableTempApplications = this.tableRowsApplications.filter(function(d) {
        for (var key in d) {
          if (d[key].toLowerCase().indexOf(val) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
    else if (tableType == 'house') {
      let val = $event.target.value;
      this.tableTempHouses = this.tableRowsHouses.filter(function(d) {
        for (var key in d) {
          if (d[key].toLowerCase().indexOf(val) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
    else if (tableType == 'user') {
      let val = $event.target.value;
      this.tableTempUsers = this.tableRowsUsers.filter(function(d) {
        for (var key in d) {
          if (d[key].toLowerCase().indexOf(val) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
  }

  onActivate(event, tableType: string) {
    if (tableType == 'ticket') {
      this.tableActiveRowTickets = event.row;
    }
    else if (tableType == 'application') {
      this.tableActiveRowApplications = event.row;
    }
    else if (tableType == 'house') {
      this.tableActiveRowHouses = event.row;
    }
    else if  (tableType == 'user') {
      this.tableActiveRowUsers = event.row;
    }
  }

}
