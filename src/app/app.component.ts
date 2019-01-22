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
    new Recipe('Choco-Chip-Cookie', '1. Chocolate 2. Cookie Dough', 'Mix all ingredients and put in oven');
    new Recipe('Ice Cream', '1. Chocolate 2. Cookie Dough 3. Ice 4. Cream', 'Mix all ingredients and put in freezer');
    new Recipe('Chili', '1. Beans 2. Veggies 3. Chili spices', 'Mix all ingredients and put in crockpot');
  ];
}
