import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
 
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: '/roles',
    pathMatch: 'full'
  },
  {
    path: 'alert',
    loadChildren: () => import('./tabs/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./tabs/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'busbook',
    loadChildren: () => import('./pages/busbook/busbook.module').then( m => m.BusbookPageModule)
  },
  {
    path: 'medicalsheet',
    loadChildren: () => import('./pages/medicalsheet/medicalsheet.module').then( m => m.MedicalsheetPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'saturday',
    loadChildren: () => import('./pages/busbook/itinerary/saturday/saturday.module').then( m => m.SaturdayPageModule)
  },
  {
    path: 'sunday',
    loadChildren: () => import('./pages/busbook/itinerary/sunday/sunday.module').then( m => m.SundayPageModule)
  },
  {
    path: 'itinerary',
    loadChildren: () => import('./pages/busbook/itinerary/itinerary.module').then( m => m.ItineraryPageModule)
  },
  {
    path: 'key-contacts',
    loadChildren: () => import('./pages/busbook/key-contacts/key-contacts.module').then( m => m.KeyContactsPageModule)
  }
  ,
  {
    path: 'hilton',
    loadChildren: () => import('./pages/busbook/key-contacts/hilton/hilton.module').then( m => m.HiltonPageModule)
  }
  ,
  {
    path: 'dunkin-donuts',
    loadChildren: () => import('./pages/busbook/key-contacts/dunkin-donuts/dunkin-donuts.module').then( m => m.DunkinDonutsPageModule)
  },
  {
    path: 'arbuys',
    loadChildren: () => import('./pages/busbook/key-contacts/arbuys/arbuys.module').then( m => m.ArbuysPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/medicalsheet/detail/detail.module').then( m => m.DetailPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}