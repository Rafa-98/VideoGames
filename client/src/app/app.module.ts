import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para DataBinding
import { FormsModule } from '@angular/forms';

// Para realizar el CRUD
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

//Servicios
import { GamesService } from './services/games.service';
import { CartService } from './services/cart.service';


import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
