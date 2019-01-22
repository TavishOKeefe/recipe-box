import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-Box';

  recipes: Recipe[] = [
    new Recipe('Choco-Chip-Cookie', ['chocolate', 'cookie dough'], 'Mix all ingredients and put in oven');
    new Recipe('Ice Cream', ['chocolate', 'ice', 'cream'], 'Mix all ingredients and put in freezer');
    new Recipe('Chili', ['beans', 'veggies', 'spices'], 'Mix all ingredients and put in crockpot');
  ];
}
