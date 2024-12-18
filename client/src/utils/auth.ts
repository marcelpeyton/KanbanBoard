//import { JwtPayload, jwtDecode } from 'jwt-decode';
import {jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const loggedUserEncoded = localStorage.getItem('id_token') || '';
    const loggedUser = jwtDecode(loggedUserEncoded);
    return loggedUser;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const decodedToken = jwtDecode(token);
    // CHeck if decodedToken exists and then check if expired.
    if (decodedToken.exp && Date.now() >= decodedToken.exp  * 1000) {
      return false;    
    } else{
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // TODO: redirect to the home page    
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.assign('/');
  }
}

export default new AuthService();
