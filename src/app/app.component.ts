import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {

    const config = {
      apiKey: 'AIzaSyDvgHaExDxC_2yGD-ULj48_pYCTylXcM_k',
      authDomain: 'capproject-b8742.firebaseapp.com',
      databaseURL: 'https://capproject-b8742.firebaseio.com',
      projectId: 'capproject-b8742',
      storageBucket: 'capproject-b8742.appspot.com',
      messagingSenderId: '15546344281'
    };
    firebase.initializeApp(config);

  } //oninit
}
