export const formatted = (amount: string): string => {
  // Parse the amount string to a number
  const parsedAmount = parseFloat(amount);

  // Check if the parsed amount is a valid number
  if (isNaN(parsedAmount)) {
    throw new Error('Invalid amount');
  }

  // Format the amount as money
  const formattedAmount = parsedAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formattedAmount;
};
