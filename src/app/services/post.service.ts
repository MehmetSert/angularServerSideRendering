import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  getPhotos() {
    return this.http.get(this.apiUrl + '/photos');
  }

  getPhoto(id) {
    return this.http.get(this.apiUrl + '/photos/' + id);
  }

  getAlbum(id) {
    return this.http.get(this.apiUrl + '/albums/' + id);
  }

  getUser(id) {
    return this.http.get(this.apiUrl + '/users/' + id);
  }

}
