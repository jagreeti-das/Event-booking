import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  // now = new Date();
  const duration = expirationDate.getTime() - new Date().getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration <= 0) {
    return "EXPIRED";
  }
  return token;
};

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  
  if (!token) {
    return redirect('/auth');
  }
  
  // Loader must return null if no data is loaded
  return null;
}