import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SearchComponent } from './search/search.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
{path:'Home', component:HomeComponent},
{path: 'Shop',component:ShopComponent},
{path:'Search', component:SearchComponent},
{path: 'Home', component:FrontPageComponent},
{path: 'Log In', component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

