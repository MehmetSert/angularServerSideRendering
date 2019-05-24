import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  showSpinner = true;
  selectedPhotoId;
  photo;
  album;
  user;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateTitle('Detail page - Angular SSR Test');
    this.selectedPhotoId = this.activatedRoute.snapshot.paramMap.get('id'); // url'deki id yi alıyoruz
    if (this.selectedPhotoId) {
      this.getPhoto(this.selectedPhotoId);
    }
  }

  getPhoto(id) {
    this.postService.getPhoto(id)
      .subscribe((res: any) => {
        this.photo = res;
        this.seoService.updateTitle(res.title + ' - Angular SSR');
        this.getAlbum(res.albumId);
      });
  }

  getAlbum(id) {
    this.postService.getAlbum(id)
      .subscribe((res: any) => {
        this.album = res;
        this.seoService.updateMeta('description', this.photo.title + ' - ' + res.title);
        this.getUser(res.userId);
      });
  }

  getUser(id) {
    this.postService.getUser(id)
      .subscribe((res: any) => {
        this.user = res;
        this.showSpinner = false; // loading burada kaybolacak ve veriler görünecek.
      });
  }

}
