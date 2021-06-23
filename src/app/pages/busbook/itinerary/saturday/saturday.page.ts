import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-saturday',
  templateUrl: './saturday.page.html',
  styleUrls: ['./saturday.page.scss'],
})
export class SaturdayPage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  //book navigateByUrl
  async itinerary(){
   // await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/itinerary', { replaceUrl:true });
    //this.router.navigateByUrl('/medicalsheet', { replaceUrl:true });
  }

}
