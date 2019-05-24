import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSpinner = true;
  photos;

  constructor(
    private postService: PostService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateTitle('Angular SSR Test - Homepage');
    this.getPhotos();
  }

  getPhotos() {
    this.postService.getPhotos()
      .subscribe((res: any) => {
        console.log(res);
        this.photos = res;
        this.showSpinner = false;
      }, (err: any) => {
        console.log(err);
      });
  }

}
