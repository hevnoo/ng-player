import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { httpType } from './interface/http';
import storage from '../utils/storage'

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor() { }
}
