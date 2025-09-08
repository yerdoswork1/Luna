import LunaRosa from "@/assets/services/luna-rosa-img.png";
import LunaBello from "@/assets/services/luna-bello-img.png"
import LunaBite from "@/assets/services/luna-bite-img.png"
import LunaVIte from "@/assets/services/luna-vite-img.png"


interface Service {
  id: string,
  name: string,
  image?: string,
  description?: string[],
}


export
  interface ServiceCategory {
  items: Service[],
}


export const services: ServiceCategory[] = [
  {
    items: [
      {
        id: "restaurant",
        name: "LunaRosa",
        image: LunaRosa,
        description: [
          "Наш французский ресторан — это уголок Парижа в вашем городе. Мы предлагаем изысканную кухню с акцентом на свежие ингредиенты, тонкие вкусовые сочетания и классические рецепты Франции. В меню- нежные круассаны, крем-супы, утка конфи, луковый суп, тартар и десерты, которые покорили мир."
        ]
      },
      {
        id: "coffeeshop",
        name: "LunaBello",
        image: LunaBello,

        description: [
          `Наша кофейня — это уютное место для встреч и вдохновения. Мы предлагаем ароматный кофе из отборных сортов зёрен, приготовленный по классическим и авторским рецептам. В меню — свежая выпечка, десерты, лёгкие закуски и напитки, которые создают идеальное настроение для любого дня.`
        ]
      },
      {
        id: "fast-food",
        name: "LunaBite",
        image: LunaBite,

        description: [
          `Наш фастфуд — это быстро, вкусно и сытно. Мы готовим бургеры, сэндвичи, картофель фри и закуски только из свежих ингредиентов, чтобы каждый перекус был ярким и насыщенным. В меню - классические хиты и авторские блюда, которые понравятся всей семье.`
        ]
      },
      {
        id: "healthy-diet",
        name: "LunaVIte",
        image: LunaVIte,
        description: [
          'Наш ресторан правильного питания - это вкусная еда без компромиссов для здоровья. Мы готовим блюда из натуральных и свежих продуктов, сохраняя баланс белков, жиров и углеводов. В меню  - салаты, боулы, полезные десерты и смузи для тех, кто ценит вкус и заботится о своём теле.'
        ]
      }
    ]
  }
]