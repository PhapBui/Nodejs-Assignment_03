// Save an item to local storage
export function saveToStorage(key, value) {
  if (!value) localStorage.setItem(key, JSON.stringify(null));
  localStorage.setItem(key, JSON.stringify(value));
}

// Get an item from local storage
export function getFromStorage(key, defaultData) {
  if (!localStorage.getItem(key)) {
    return defaultData;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
}
// Remove item in local storage by key
export function removeItem(key) {
  localStorage.removeItem(key);
}
