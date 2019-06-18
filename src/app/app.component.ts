import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularServerSideRendering';

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      localStorage.setItem('token', 'xxxxxxxxxxxxxx');
    }
  }

}
