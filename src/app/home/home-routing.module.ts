import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'all',
        loadChildren : () => import("../pages/all/all.module").then(mod=>mod.AllPageModule)
      },
      {
        path: 'explore',
        loadChildren : () => import("../pages/explore/explore.module").then(mod=>mod.ExplorePageModule)
      },
      {
        path: 'search',
        loadChildren : () => import("../pages/search/search.module").then(mod=>mod.SearchPageModule)
      },
      {
        path: 'setting',
        loadChildren : () => import("../pages/setting/setting.module").then(mod=>mod.SettingPageModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
