import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './modules/home';
import {NewsComponent} from './modules/news';
import {WatchlistComponent} from './modules/watchlist';
import { AppComponent} from './app.component';


const routes: Routes = [
  // {path:'', component: HomeComponent,
  // children: [
  //       {
  //         path: '',
  //         loadChildren:
  //           './modules/home/home-routing.module#HomeRoutingModule'
  //       },]
  //     },
  //     {path:'', component: NewsComponent,
  // children: [
  //       {
  //         path: '/news',
  //         loadChildren:
  //           './modules/news/news-routing.module#NewsRoutingModule'
  //       },]
  //     },

  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren:
  //         './modules/home/home-routing.module#HomeRoutingModule'
  //     },
  //     {
  //       path: '/news',
  //       loadChildren:
  //         './modules/news/news-routing.module#NewsRoutingModule'
  //     },
  //     {
  //       path: '/watchlist',
  //       loadChildren:
  //         './modules/watchlist/watchlist-routing.module#WatchlistRoutingModule'
  //     }
  //   ],
  //   //canActivate: [NoAuthGuard]
  // },
  // {
  //   path: '',
  //   component: NewsComponent,
  //   children: [
  //     {
  //       path: '/news',
  //       loadChildren:
  //         './modules/news/news-routing.module#NewsRoutingModule'
  //     }
  //   ],
  //   //canActivate: [NoAuthGuard]
  // },
  // {
  //   path: '',
  //   component: WatchlistComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren:
  //         './modules/watchlist/watchlist-routing.module#WatchlistRoutingModule'
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
   // ],
   // canActivate: [AuthGuard]
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
