import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	joke:any;
  category: any;

  constructor(
   public navCtrl: NavController,
   public http : Http
  ) {

  }

  ngOnInit() {
  	this.http.get('https://api.icndb.com/jokes/random').subscribe(res => {
      this.joke = res.json().value.joke;
    });
  }

  gimmeJoke() {
    this.http.get(`https://api.icndb.com/jokes/random?limitTo=[${this.category}]`).subscribe(res => {
      this.joke = res.json().value.joke;
    });
  }

}
