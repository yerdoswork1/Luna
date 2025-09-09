import Restaurant from '@/assets/home/restaurant-card.png';
import CoffeeShop from '@/assets/home/coffee-shop-card.png';
import FastFood from "@/assets/home/fastfood-card.png";
import HealthyDiet from "@/assets/home/healthy-diet-card.png";


export interface IServiceCard {
  id: string;
  name: string;
  image?: string;
  dscr?: string;
}

export const cards: IServiceCard[] = [
  {
    id: "restaurant",
    name: "restaurant",
    image: Restaurant,
    dscr: "LunaRosa"
  },
  {
    id: "coffeeshop",
    name: "coffeeshop",
    image: CoffeeShop,
    dscr: "LunaBello"
  },
  {
    id: "fast-food",
    name: "fast-food",
    image: FastFood,
    dscr: "LunaBite"
  },
  {
    id: "healthy-diet",
    name: "healthy-diet",
    image: HealthyDiet,
    dscr: "LunaVita"
  },
]