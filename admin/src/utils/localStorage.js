export const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key) || "";
};

export const setItemFromLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const removeItemFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
