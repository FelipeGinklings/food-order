export interface MealData {
  id: string;
  price: string;
  name: string;
  description?: string;
  image?: string;
}

export interface CustomerData {
  name: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
}

interface Meals extends MealData {
  quantity: number;
}

export interface OrderData {
  id?: string;
  items: Meals[];
  customer: CustomerData;
}
