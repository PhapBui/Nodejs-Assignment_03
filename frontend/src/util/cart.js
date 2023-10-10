export const countTotalItem = (items) => {
  return (
    items?.reduce((preValue, currState) => preValue + currState.quantity, 0) ||
    0
  );
};
