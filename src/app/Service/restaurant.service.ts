import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../Model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiURLAjouterRestaurant = "http://localhost:8080/restaurant/add"
  apiURLSupprimerRestaurant = "http://localhost:8080/restaurant/delete"
  apiURLObtenirRestaurants = "http://localhost:8080/restaurant/get"
  apiURLModifierRestaurant = "http://localhost:8080/restaurant/update"

  constructor(private http:HttpClient) { }

  ajoutRestaurant(restaurant: Restaurant) {
    console.log(restaurant);
    return this.http.post(this.apiURLAjouterRestaurant, restaurant);
  }

  obtenirRestaurant(id: number) {
    return this.http.get<Restaurant>(`${this.apiURLObtenirRestaurants}/${id}`);
  }
  /*
  modifierRestaurant(restaurant: Restaurant) {
    return this.http.put(`${this.apiURLModifierRestaurant}/${restaurant.id}`, restaurant);
  }
  */
  supprimerRestaurant(id: number) {
    return this.http.delete(`${this.apiURLSupprimerRestaurant}/${id}`);
  }

  findAllRestaurants() {
    return this.http.get<Restaurant[]>(this.apiURLObtenirRestaurants);
  }
}
