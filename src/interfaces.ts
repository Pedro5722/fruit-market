export type Fruit = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
  };
  price: number;
  imgLink: string;
};

export type Item = Fruit & { quantity: number };
