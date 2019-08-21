import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBOdP67yfjlxcnofyIxZnnu6DoJlfP_GqSNkmF0n1w0kl2Ztoxym9z_E2GHyAyVGOPIOAGS4TfG1xBoMdE'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe( data => {
        console.log(data);
    });

  }
}
