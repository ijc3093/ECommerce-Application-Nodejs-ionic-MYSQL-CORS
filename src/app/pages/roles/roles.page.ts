import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  async role_login() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
  }

}
