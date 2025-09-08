import Restaurant from '@/assets/home/restaurant-card.png';
import CoffeeShop from '@/assets/home/coffee-shop-card.png';
import FastFood from "@/assets/home/fastfood-card.png";
import HealthyDiet from "@/assets/home/healthy-diet-card.png";


export interface IServiceCard {
  id: string;
  name: string;
  image?: string;
  price?: number;
}

export const cards: IServiceCard[] = [
  {
    id: "restaurant",
    name: "restaurant",
    image: Restaurant,
  },
  {
    id: "coffeeshop",
    name: "coffeeshop",
    image: CoffeeShop,
  },
  {
    id: "fast-food",
    name: "fast-food",
    image: FastFood,
  },
  {
    id: "healthy-diet",
    name: "healthy-diet",
    image: HealthyDiet,
  },
]