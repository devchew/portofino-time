export interface Restaurant {
  opening: string;
  closing: string;
}

export interface MealGroup {
  [key: string]: Restaurant;
}

export interface RestaurantData {
  Posiłki: {
    [key: string]: MealGroup;
  };
}