import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryResolverService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(){
    const type = localStorage.getItem('token');
    return this.dataService.getNinjaData(type)
  }
}
