export interface IResponseDish {
  strMeal: string,
  strMealThumb: string,
  strInstructions: string
}

export interface IDish {
  heading: string,
  description: string,
  img?: string
}

export interface IGetRandomDish {
  meals: [IResponseDish]
}

export interface IFavourites {
  dishes: IDish[]
}

