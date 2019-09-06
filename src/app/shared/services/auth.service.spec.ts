import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { LoginResult, Credentials } from '../models/auth';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { RouterTestingModule } from '@angular/router/testing';

let store = {};

beforeAll(() => {
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };

  spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
  spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);
})

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
providers: [AuthService, DataService]
  }));

  it('should LogIn Asuka and return Shinobi', inject([HttpTestingController,
    DataService, AuthService], 
    (httpMock: HttpTestingController, dataService: DataService, authService: AuthService) => {
      const credentials: Credentials = {
        username: 'Asuka',
        password: '12345'
      };
      
      const mockLoginResult: LoginResult = {
        result: 'Shinobi',
        status: '200',
        message: 'Welcome to Ninja-Rest'

      }

      authService.login(credentials).subscribe((res: LoginResult) => {
        expect(res).toEqual(mockLoginResult);
        expect(localStorage.getItem('token')).toEqual('Shinobi');
        expect(dataService.ninjaType).toEqual('Shinobi');
      })

      const mockReq = httpMock.expectOne(authService.apiUrl + 'login');

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockLoginResult);

      httpMock.verify();
    }))

    it('should LogIn Nara and return Ukami', inject([HttpTestingController,
      DataService, AuthService], 
      (httpMock: HttpTestingController, dataService: DataService, authService: AuthService) => {
        const credentials: Credentials = {
          username: 'Nara',
          password: '12345'
        };
        
        const mockLoginResult: LoginResult = {
          result: 'Ukami',
          status: '200',
          message: 'Welcome to Ninja-Rest'
  
        }
  
        authService.login(credentials).subscribe((res: LoginResult) => {
          expect(res).toEqual(mockLoginResult);
          expect(localStorage.getItem('token')).toEqual('Ukami');
          expect(dataService.ninjaType).toEqual('Ukami');
        })
  
        const mockReq = httpMock.expectOne(authService.apiUrl + 'login');
  
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockLoginResult);
  
        httpMock.verify();
      }))

      it('should LogIn Sengoku and return Kanja', inject([HttpTestingController,
        DataService, AuthService], 
        (httpMock: HttpTestingController, dataService: DataService, authService: AuthService) => {
          const credentials: Credentials = {
            username: 'Sengoku',
            password: '12345'
          };
          
          const mockLoginResult: LoginResult = {
            result: 'Kanja',
            status: '200',
            message: 'Welcome to Ninja-Rest'
    
          }
    
          authService.login(credentials).subscribe((res: LoginResult) => {
            expect(res).toEqual(mockLoginResult);
            expect(localStorage.getItem('token')).toEqual('Kanja');
            expect(dataService.ninjaType).toEqual('Kanja');
          })
    
          const mockReq = httpMock.expectOne(authService.apiUrl + 'login');
    
          expect(mockReq.cancelled).toBeFalsy();
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(mockLoginResult);
    
          httpMock.verify();
        }))

    afterEach(() => {
      const dataService: DataService = TestBed.get(DataService);
      dataService.setNinjaType(undefined);
      localStorage.clear();
    })
});
