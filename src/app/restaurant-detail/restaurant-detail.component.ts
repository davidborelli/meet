import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  /*
     É importado o ActivatedRoute, pois o mesmo é usado para pegar o parametro do id do restaurante
     existe duas formas de acesso, são elas:
     Subscribe = cada alteração é atualizada
     snapshot = é uma "foto" do parametro atual
     .params['nome_do_parametro']
  */
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
