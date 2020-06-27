import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BlogComponent} from  './blog/blog.component';
import { TravelsComponent} from  './travels/travels.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  {

    path:"",component: HomeComponent

},
{

    path: "blog",component: BlogComponent

},
{

    path: "travels",component: TravelsComponent

},
{

    path: "travels",component: TravelsComponent

},{
  path: 'locations/:locationId', component: LocationDetailsComponent
},{
  path: 'cart', component: CartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
