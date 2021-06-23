import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
 
  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}
 
  ngOnInit() {
  }

  async logout() {
    //await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  next() {
    this.slides.slideNext();
  }

  // bus book navigateByUrl
  async bus_book() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/busbook', { replaceUrl:true });
  }

  // medical sheet navigateByUrl
  async medical_sheet() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    // this.router.navigateByUrl('/busbook', { replaceUrl:true });
    this.router.navigateByUrl('/medicalsheet', { replaceUrl:true });
  }
}