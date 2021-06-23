import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-key-contacts',
  templateUrl: './key-contacts.page.html',
  styleUrls: ['./key-contacts.page.scss'],
})
export class KeyContactsPage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}
  

  ngOnInit() {
  }

  //book navigateByUrl
  async busbook(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/busbook', { replaceUrl:true });
  }

  //book navigateByUrl
  async hilton(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/hilton', { replaceUrl:true });
  }

  async dunkin(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/dunkin-donuts', { replaceUrl:true });
  }

  async arbuys(){
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/arbuys', { replaceUrl:true });
  }

}
