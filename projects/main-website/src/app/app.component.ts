import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';

import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
  title = 'Jason Rahm';  
  navOpen: boolean;
  mobileQuery: MediaQueryList;
  education = [];
  about = [];

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,
    private titleService: Title,
    private getDataService: GetDataService 
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.navOpen = !this.mobileQuery.matches;
    this.getDataService.getResume().subscribe(data => {
      this.education = data.education;
      this.about = data.about;
    });
  }

}
