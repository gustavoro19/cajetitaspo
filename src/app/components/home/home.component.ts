import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  countrys: any[] = [];

  constructor( private spotify: SpotifyService ) {

    this.spotify.getNewReleases();
  }


}