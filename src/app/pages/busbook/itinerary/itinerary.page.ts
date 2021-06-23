import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {
  
  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}
  

  ngOnInit() {
  }

  //book navigateByUrl
  async busbook(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/busbook', { replaceUrl:true });
    //this.router.navigateByUrl('/medicalsheet', { replaceUrl:true });
  }

  async saturday(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/saturday', { replaceUrl:true });
    //this.router.navigateByUrl('/medicalsheet', { replaceUrl:true });
  }

  async sunday(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/sunday', { replaceUrl:true });
    //this.router.navigateByUrl('/medicalsheet', { replaceUrl:true });
  }


}
