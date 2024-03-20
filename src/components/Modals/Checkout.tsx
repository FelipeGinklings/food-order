import React, { FormEvent, useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { ProgressContext } from '../../store/progress-context';
import { CartContext } from '../../store/cart-context';
import { formatted } from '../../utils/formatter';
import { postNewOrder } from '../../utils/http';
import { CustomerData } from '../../utils/types';

// Constants
const EMAIL = 'email';
const NAME = 'name';
const ADDRESS = 'address';
const POSTAL = 'postal';
const CITY = 'city';

const Checkout: React.FC = () => {
  const { setProgress } = useContext(ProgressContext);
  const { items } = useContext(CartContext);

  const total = items
    .reduce((acc, item) => acc + +item.price * item.quantity!, 0)
    .toString();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const form = event.target as HTMLFormElement;

    // Form Data
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    // Validation
    // Must not contain any numbers
    if (
      /\d/.test(String(data[NAME])) || // Validate the Full Name
      /\d/.test(String(data[CITY])) // Validate the City
    ) {
      console.log('Invalid Input');
      return;
    }

    const customer: CustomerData = {
      name: String(data[NAME]),
      email: String(data[EMAIL]),
      street: String(data[ADDRESS]),
      postalCode: String(data[POSTAL]),
      city: String(data[CITY]),
    };

    postNewOrder({ items, customer });
    setProgress('success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="py-4 px-0 text-2xl font-extrabold">Checkout</h2>
      <p className="text-base">Total Amount: {formatted(total)} </p>
      <Input
        label="Full Name"
        htmlFor={NAME}
        type="text"
        name={NAME}
        id={NAME}
        required
      />
      <Input
        label="E-Email Address"
        htmlFor={EMAIL}
        type={EMAIL}
        name={EMAIL}
        id={EMAIL}
        required
      />
      <Input
        label="Street"
        htmlFor={ADDRESS}
        type={ADDRESS}
        name={ADDRESS}
        id={ADDRESS}
        required
      />
      <div className="flex justify-start gap-4">
        <Input
          label="Postal Code"
          htmlFor={POSTAL}
          type={POSTAL}
          name={POSTAL}
          id={POSTAL}
          inputMode="numeric"
          maxLength={5}
          minLength={5}
          required
        />
        <Input
          label="City"
          htmlFor={CITY}
          type={CITY}
          name={CITY}
          id={CITY}
          required
        />
      </div>
      <p className="flex justify-end gap-4 mt-4">
        <Button
          className="text-stone-800 active:text-stone-700 hover:text-stone-700"
          textOnly
          type="button"
          onClick={setProgress.bind(this, undefined)}
        >
          Close
        </Button>
        <Button>Submit Order</Button>
      </p>
    </form>
  );
};

export default Checkout;
