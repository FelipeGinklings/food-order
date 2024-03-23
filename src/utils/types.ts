// Modals
export type Progress = undefined | 'cart' | 'checkout';

// Handle data types for the app
export interface MealData {
  id: string;
  price: string;
  name: string;
  description: string;
  image: string;
}

export interface CustomerData {
  name: FormDataEntryValue | string;
  email: FormDataEntryValue | string;
  street: FormDataEntryValue | string;
  postalCode: FormDataEntryValue | string;
  city: FormDataEntryValue | string;
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

export type Config<T extends 'POST' | 'GET'> = T extends 'GET'
  ? object
  : T extends 'POST'
  ? {
      method: T;
      headers: {
        'Content-Type': T extends 'POST' ? 'application/json' : never;
      };
      body?: string;
    }
  : never;
