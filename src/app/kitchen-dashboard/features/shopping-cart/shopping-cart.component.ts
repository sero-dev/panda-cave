import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../models/shopping-list.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  neededIngredients: ShoppingCartItem[];
  inventoryIngredients: ShoppingCartItem[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart()
      .subscribe(response => {
        this.neededIngredients = response.needed;
        this.inventoryIngredients = response.inventory;
      });
  }

}
