import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren:
  //         './modules/authentication/authentication-routing.module#AuthenticationRoutingModule'
  //     }
  //   ],
  //   //canActivate: [NoAuthGuard]
  // },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren:
  //         './modules/home/home-routing.module#HomeRoutingModule'
  //     },
      // {
      //   path: 'operations',
      //   loadChildren:
      //     './modules/operations/operations-routing.module#OperationsRoutingModule'
      // },
      // {
      //   path: 'settings',
      //   loadChildren:
      //     './modules/app-settings/app-settings-routing.module#AppSettingsRoutingModule'
      // }
   //],
   // canActivate: [AuthGuard]
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
