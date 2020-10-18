import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() {}

  ngOnInit() {
    
  }

  updateOptions(){}
}
