import { Injectable } from '@angular/core';
import {Dish} from '../shared_folder/dish';
import {DISHES} from '../shared_folder/dishes';
import {Comment}from '../shared_folder/comment';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes():Dish[]{
    return DISHES;
  }
}
