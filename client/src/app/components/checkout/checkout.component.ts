import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  
  itemsList:any[] = [];

  constructor(private cart:CartService, private router:Router) { }

  ngOnInit() {
  }

  releaseCart(){
    this.cart.amount = 0;
    this.cart.gamesList = [];
    this.router.navigate(['/games']);
  }

}
