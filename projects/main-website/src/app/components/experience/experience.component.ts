import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs: any = [];

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getData('resume').subscribe(data => {
      this.jobs = data.jobs;
    });
  }

}
