import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared_folder/dish';
import{DishService } from '../services/dish.service';
import {Promotion} from '../shared_folder/promotion';
import {PromotionService} from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;

  constructor(private dishService:DishService,
    private promotionService:PromotionService) { }

  ngOnInit():void {
    this.dish=this.dishService.getFeaturedDish();
    this.promotion=this.promotionService.getFeaturedPromotion();
  }

}
