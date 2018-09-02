import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any = [];

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getData('projects').subscribe(data => {
      this.projects = data.projects;
    });
  }

}
