// Handle data types for the app
export interface MealData {
  id: string;
  price: string;
  name: string;
  description: string;
  image: string;
}

export interface CustomerData {
  name: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity?: number;
}

export interface OrderData {
  id?: string;
  items: CartItem[];
  customer: CustomerData;
}
