import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-arbuys',
  templateUrl: './arbuys.page.html',
  styleUrls: ['./arbuys.page.scss'],
})
export class ArbuysPage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  //key_contacts navigateByUrl
  async key_contacts(){
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/key-contacts', { replaceUrl:true });
  }

  //hilton navigateByUrl
  async hilton(){
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/hilton', { replaceUrl:true });
  }

}
