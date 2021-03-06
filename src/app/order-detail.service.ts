import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderLines } from './order-lines';
import { AuthenticationService } from './authentication.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  private baseurl = 'http://localhost:8080/FilRougeBack/api';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

getOrderLinesByOrderId(id: number): Observable<OrderLines[]> {
    const httpOptions = {headers: new HttpHeaders({Accept: 'application/json'})};

    return this.http.get<OrderLines[]>(this.baseurl + '/orderlines/order/' + id , httpOptions);
  }

  PlaceOrder(orderDetail: OrderDetailService) {
    const reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.getToken() });
    reqHeader.append('Content-Type', 'application/json');

    return this.http.post(this.baseurl, orderDetail, { headers: reqHeader })
      .pipe(
        map(res => res),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}

