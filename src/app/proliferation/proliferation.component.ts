import { Component, OnInit } from '@angular/core';
import {GlobalProliferationExperiment} from "../model/models";

@Component({
  selector: 'app-proliferation',
  templateUrl: './proliferation.component.html',
  styleUrls: ['./proliferation.component.css']
})
export class ProliferationComponent implements OnInit {

  isProliferationFormFieldDisplayed: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  saveProliferationExperiment(proliferationExperiment : GlobalProliferationExperiment){
    console.log("prolif : " , proliferationExperiment);
  }

  showProliferationFormField() {
    this.isProliferationFormFieldDisplayed = !this.isProliferationFormFieldDisplayed;
  }
}
