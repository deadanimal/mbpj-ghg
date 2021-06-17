import { Component, OnInit } from "@angular/core";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { Application } from "src/app/shared/services/applications/applications.model";
import { MediasService } from "src/app/shared/services/medias/medias.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.scss"],
})
export class TestingComponent implements OnInit {
  public tempApp: Application[] = [];

  public tempFile: any[];

  mediaForm = new FormGroup({
    image: new FormControl(""),
  });

  constructor(
    private appService: ApplicationsService,
    private mediaService: MediasService
  ) {
    this.tempFile = [];
    //this.tempApp = this.appService.barangNakDelete
  }

  onFileChanged(event: any) {
    this.tempFile = event.target.files;
    // console.log("test: ", this.tempFile);
  }

  uploadFile() {
    // console.log(this.mediaForm.value);
    this.mediaService.doCreateMedia(this.mediaForm.value).subscribe(
      () => {},
      () => {},
      () => {}
    );
  }

  ngOnInit() {
    //this.bendaNakDelete()
  }

  bendaNakDelete() {
    this.tempApp.forEach((data) => {
      if (data.status == "SN") {
        this.appService.doDeleteScript(data.id).subscribe((res) => {
          // console.log("deleted");
        });
      }
    });
  }
}
