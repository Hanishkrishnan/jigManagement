import { Injectable, signal, computed } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { MOCK_USERS } from '../../data/mock-user';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID , inject} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

 // apiUrl = 'http://localhost:8080/api/auth';
  private currentUserSignal = signal<User | null>(null);
  currentUser = this.currentUserSignal.asReadonly();
  private readonly USER_KEY = 'auth_user';
  private platformId = inject(PLATFORM_ID);
 
  constructor(){
   this.restoreUser();
   console.log( " is Authenticated from auth service",this.isAuthenticated())
  }

  private restoreUser() : void {
    //because SSR is enabled in this project. So for using local storage I am using it
     if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    let storedUser = localStorage.getItem(this.USER_KEY);

     if(!storedUser) {
        storedUser = sessionStorage.getItem(this.USER_KEY);
       }
     if(storedUser){
      const user : User = JSON.parse(storedUser);
      this.currentUserSignal.set(user);
    }
  }

  login(username: string, password: string, rememberme :boolean): User | null {
    const user = MOCK_USERS.find(
                           user => 
                           user.email.toLowerCase().trim() === username.toLowerCase().trim() && user.password === password);
    if(user){
       this.currentUserSignal.set(user);
       const storage = rememberme ? localStorage : sessionStorage;
       storage.setItem(
        this.USER_KEY,
        JSON.stringify(user)
      );
    }
    return user ?? null;
    //return this.http.post<User>(`${this.apiUrl}/login`, { username, password });
  }

  logout(){
    this.currentUserSignal.set(null);
    localStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }
  isAuthenticated = computed(()=>{
    return this.currentUser() !== null;
  })

  getCurrentUser() : User | null{
    return this.currentUserSignal() ?? null
  }

  isAdmin(): boolean {
   return this.currentUserSignal()?.role === 'ADMIN'
  }
  // login(data:any){
  //   return this.http.post(`${this.apiUrl}/login`,data);
  // }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // logOut(){
  //   localStorage.clear();
  // }

}
