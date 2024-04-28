export const getTokenFromLocalStorage = (token) => {

  try {
    const serializedState = window.localStorage.getItem(token);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const setTokenToLocalStorage = (token, state) => {

  try {
    const serializedState = state;
    window.localStorage.setItem(token, JSON.stringify(serializedState));
  } catch (err) {

  }
};

export const removeToken = (token) =>{
  localStorage.removeItem(token);
}
