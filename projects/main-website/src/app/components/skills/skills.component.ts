import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any = {};

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getData('resume').subscribe(data => {
      this.skills = data.skills;
    });
  }

}
