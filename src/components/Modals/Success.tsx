import React from 'react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

// type Props = {}

const Success: React.FC = () => {
  return (
    <Modal>
      <h2 className="py-4 px-0 text-2xl font-extrabold">Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <p className="flex justify-end gap-4 mt-4">
        <Button type="button">Okay</Button>
      </p>
    </Modal>
  );
};

export default Success;
