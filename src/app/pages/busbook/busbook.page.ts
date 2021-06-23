import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-busbook',
  templateUrl: './busbook.page.html',
  styleUrls: ['./busbook.page.scss'],
})
export class BusbookPage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}
 
  ngOnInit() {
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  next() {
    this.slides.slideNext();
  }

  //tabs navigateByUrl
  async tabs() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
    //this.router.navigateByUrl('/medicalsheet', { replaceUrl:true });
  }

  public appPages = [
    { title: 'Itinerary', url: '/busbook/itinerary'},
    { title: 'Key Contect', url: '/busbook/key-contacts'},
    { title: 'Responsibilities', url: '/busbook/responsibilities'},
    { title: 'Advance Crew Check List', url: '/busbook/advance-crew-check-list'},
    { title: 'Reservations', url: '/busbook/itinerary'},
    { title: 'DC tour notes', url: '/busbook/itinerary'},
    { title: 'Incident report forms H132 blank', url: '/busbook/itinerary'},
    { title: 'Hilton fire alarm evac procedure H102', url: '/busbook/itinerary'},
    { title: 'Hilton Crisis Plan', url: '/busbook/itinerary'},
    { title: 'POW MIA ceremony', url: '/busbook/itinerary'},
    { title: 'Banquest', url: '/busbook/itinerary'},
    { title: 'Fact Sheet', url: '/busbook/itinerary'}
  ];

}
