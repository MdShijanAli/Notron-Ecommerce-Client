export const formatNumbersWithComas = (value) => {
  if(value)
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  return;
};