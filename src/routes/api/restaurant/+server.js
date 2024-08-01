import { json } from '@sveltejs/kit'

export function GET({ url }) {
  const menu = {
    breakfast: [
      {
        item: 'Pancakes',
        description: 'Fluffy buttermilk pancakes.',
        price: 9,
        img: url.origin + '/restaurant-images/breakfast/pancakes.jpg',
        selected: false,
      },
      {
        item: 'French Toast',
        description: 'Eggy toast fried with butter.',
        price: 9,
        img: url.origin + '/restaurant-images/breakfast/french-toast.jpg',
        selected: false,
      },
      {
        item: 'Eggs and Avo on Toast',
        description: 'A classic combo on crunchy rye.',
        price: 11,
        img: url.origin + '/restaurant-images/breakfast/avo-egg-toast.jpg',
        selected: false,
      },
    ],
    dinner: [
      {
        item: 'Vegetable Platter',
        description: 'A selection of vegetables, enough to share.',
        price: 7,
        img: url.origin + '/restaurant-images/dinner/vege-platter.jpg',
        selected: false,
      },
      {
        item: 'Salad',
        description: 'A light and delicious green salad.',
        price: 7,
        img: url.origin + '/restaurant-images/dinner/salad.jpg',
        selected: false,
      },
      {
        item: 'Tacos',
        description: 'Zesty chickpea tacos, vegetarian friendly.',
        price: 9,
        img: url.origin + '/restaurant-images/dinner/tacos.jpg',
        selected: false,
      },
      {
        item: 'Meatballs',
        description: 'Rich, savoury pan-fried meatballs.',
        price: 9,
        img: url.origin + '/restaurant-images/dinner/meatballs.jpg',
        selected: false,
      },
      {
        item: 'Fish',
        description: 'Pan-fried catch of the day, ask the chef. ',
        price: 9,
        img: url.origin + '/restaurant-images/dinner/fish.jpg',
        selected: false,
      },
      {
        item: 'Pizza',
        description: 'Shredded chicken and coriander.',
        price: 12,
        img: url.origin + '/restaurant-images/dinner/pizza.jpg',
        selected: false,
      },
      {
        item: 'Chicken Burger',
        description: 'Epic fried chicken with kimchi.',
        price: 12,
        img: url.origin + '/restaurant-images/dinner/burger.jpg',
        selected: false,
      },
    ],
    dessert: [
      {
        item: 'Frozen Yoghurt',
        description: 'Cold boysenberry on the stick.',
        price: 7,
        img: url.origin + '/restaurant-images/desserts/frozen-yoghurt.jpg',
        selected: false,
      },
      {
        item: 'Cake',
        description: 'Unmissable raspberry and cream sponge.',
        price: 7,
        img: url.origin + '/restaurant-images/desserts/cake.jpg',
        selected: false,
      },
    ],
  }
  
  let response = json(menu)
  response.headers.set('Access-Control-Allow-Origin', '*')
  return response
}
