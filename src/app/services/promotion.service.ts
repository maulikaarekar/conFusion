import { Injectable } from '@angular/core';
import { Promotion} from '../shared_folder/promotion';
import {PROMOTIONS} from '../shared_folder/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Promotion[]{
    return PROMOTIONS;
  }
  getPromotion(id:string): Promotion {
    return PROMOTIONS.filter((promo) =>(promo.id === id))[0];

  }
  getFeaturedPromotion(): Promotion{
    return PROMOTIONS.filter((promo) =>promo.featured)[0];
  }
}
