import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Plugins } from '@capacitor/core';
import { MissionService} from '../../services/mission/mission.service';

const { Storage } = Plugins;

@Component({
  selector: 'app-medicalsheet',
  templateUrl: './medicalsheet.page.html',
  styleUrls: ['./medicalsheet.page.scss'],
})
export class MedicalsheetPage implements OnInit {
  missionLists = null;

  @ViewChild(IonSlides)slides: IonSlides;
  constructor(private router: Router, private missionService: MissionService) {}

  ngOnInit() {
    this.retrieveMission();
  }

  //tabs navigateByUrl
  async tabs() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
  }

   //detail navigateByUrl
   async detail() {
    //await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/detail', { replaceUrl:true });
  }
  

  //Get all items (data)
  retrieveMission() {
    this.missionService.getAll()
      .subscribe(
        data => {
          this.missionLists = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
