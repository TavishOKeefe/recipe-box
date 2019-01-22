export class Recipe {
  constructor(public title: string, public ingredients: array, public directions: string){
    this.title = title,
    this.ingredients = ingredients,
    this.directions = directions
  }

  displayIngredients(){
    for(let theIngredients of this.ingredients){
      return theIngredients;
    }
}
