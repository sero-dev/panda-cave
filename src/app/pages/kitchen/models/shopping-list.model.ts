export class ShoppingCartItem {
  amount: number;
  unitOfMeasure: string;
  ingredient: string;
}

export class ShoppingList {
  required: ShoppingCartItem[];
  needed: ShoppingCartItem[];
  inventory: ShoppingCartItem[];
}