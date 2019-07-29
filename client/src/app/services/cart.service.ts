import { Injectable } from '@angular/core';

import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  amount:number = 0;

  gamesList:Game[] = [];

  constructor() { }
}
