const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getItem = (key, defaultValue = null) => {
  try {
    const storedValue = storage.getItem(key);
    if (storedValue === null) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
  }
};
