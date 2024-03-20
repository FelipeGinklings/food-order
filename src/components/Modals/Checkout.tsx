import React, { FormEvent, useContext } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { ProgressContext } from '../../store/progress-context';
import { CartContext } from '../../store/cart-context';
import { formatted } from '../../utils/formatter';
import { CustomerData } from '../../utils/types';
import useHttp from '../../hooks/useHttp';
import Error from '../Error/Error';
import useValidation from '../../hooks/useValidation';
import { delay } from '../../utils/delay';

// Constants
const EMAIL = 'email';
const NAME = 'name';
const ADDRESS = 'address';
const POSTAL = 'postal';
const CITY = 'city';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const Checkout: React.FC = () => {
  const { setProgress } = useContext(ProgressContext);
  const { items, reset } = useContext(CartContext);
  const {
    sendRequest,
    isLoading: isSending,
    error,
  } = useHttp('POST', 'http://localhost:3000/orders', requestConfig);
  const { inputsInvalids, validation, clean } = useValidation();

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
    const nameIsInvalid = validation(String(data[NAME]), NAME, 'onlyLetters');
    const cityIsInvalid = validation(String(data[CITY]), CITY, 'onlyLetters');
    const postalIsInvalid = validation(
      String(data[POSTAL]),
      POSTAL,
      'onlyNumbers'
    );

    if (nameIsInvalid || cityIsInvalid || postalIsInvalid) {
      return;
    }

    const customer: CustomerData = {
      name: String(data[NAME]),
      email: String(data[EMAIL]),
      street: String(data[ADDRESS]),
      postalCode: String(data[POSTAL]),
      city: String(data[CITY]),
    };
    sendRequest(JSON.stringify({ order: { items, customer } }));

    if (!error && !isSending) {
      delay().then(() => setProgress('success'));
    }
    reset();
  };

  const cleanInput = (name: string) => {
    if (inputsInvalids[name]) {
      clean(name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="py-4 px-0 text-2xl font-extrabold">Checkout</h2>
      <p className="text-base">Total Amount: {formatted(total)} </p>
      <Input
        label="Full Name"
        htmlFor={NAME}
        error={inputsInvalids[NAME] && inputsInvalids[NAME].message}
        type="text"
        name={NAME}
        id={NAME}
        onChange={cleanInput.bind(this, NAME)}
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
          error={inputsInvalids[POSTAL] && inputsInvalids[POSTAL].message}
          type={POSTAL}
          name={POSTAL}
          id={POSTAL}
          onChange={cleanInput.bind(this, POSTAL)}
          inputMode="numeric"
          maxLength={5}
          minLength={5}
          required
        />
        <Input
          label="City"
          htmlFor={CITY}
          error={inputsInvalids[CITY] && inputsInvalids[CITY].message}
          type={CITY}
          name={CITY}
          id={CITY}
          onChange={cleanInput.bind(this, CITY)}
          required
        />
      </div>
      <p className="flex justify-end gap-4 mt-4">
        {error && (
          <Error title="Failed to submit order" message={error.message} />
        )}
        {isSending && <span>Sending order data...</span>}
        {!error && !isSending && (
          <>
            <Button
              className="text-stone-800 active:text-stone-700 hover:text-stone-700"
              textOnly
              type="button"
              onClick={setProgress.bind(this, undefined)}
            >
              Close
            </Button>
            <Button>Submit Order</Button>
          </>
        )}
      </p>
    </form>
  );
};

export default Checkout;
