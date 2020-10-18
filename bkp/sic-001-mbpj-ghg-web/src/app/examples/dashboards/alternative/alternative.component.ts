import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-alternative",
  templateUrl: "alternative.component.html"
})
export class AlternativeComponent implements OnInit{
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() {}

  ngOnInit() {
    
  }
  
}
