import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimonials } from '../models/testimonials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  private url:string = 'http://localhost:1337/api'
  constructor(private http: HttpClient) { }

  getTestimonials():Observable<Testimonials[]>{
    return this.http.get<Testimonials[]>(`${this.url}/testimonials`)
  }
}
