import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';

import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  @ViewChild('sideNav') sidenav;

  title = 'Jason Rahm';
  navOpen: boolean;
  mobileQuery: MediaQueryList;
  education = {
    "end": null,
    "start": null,
    "school": "",
    "degree": "",
    "major": "",
    "city": ""
  };
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

  /*
    https://github.com/iamdustan/smoothscroll/issues/47

    let item = // what we want to scroll to
    let wrapper = // the wrapper we will scroll inside
    let count = item.offsetTop - wrapper.scrollTop - xx // xx = any extra distance from top ex. 60
    wrapper.scrollBy({top: count, left: 0, behavior: 'smooth'})

    http://forums.devshed.com/javascript-development-115/offset-scrollintoview-amount-pixels-535180.html
    https://stackoverflow.com/questions/45446912/angular-4-scroll-element-offset-top-value
    https://www.reddit.com/r/Angular2/comments/7gw76o/how_to_scroll_to_top_of_the_page/

    get viewport location of target and scroll to that with offset
      viewport location should help with scrollspy

  */

  // Scroll
    // https://stackoverflow.com/questions/43945548/scroll-to-element-on-click-in-angular-4
    // Offset top on with scroll-to
    // Track position of div and if matches id of nav, activate nav link for scrollspy?

  scroll(el) {
    if (this.mobileQuery.matches) {
      el.scrollIntoView({block: 'start'});
      this.sidenav.toggle();
    } else {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

  }

}
