import { json } from '@sveltejs/kit'

export function GET({ url }) {
  const cars = {
    fast: [
      {
        car: 'Black Lamborghini',
        description: 'A sleek, high-performance sports car in a striking black finish.',
        price: 2000,
        img: url.origin + '/car-hire-images/black-lamborghini.jpg',
        credit: 'Adrian N (Unsplash)',
        available: false,
      },
      {
        car: 'Orange Lamborghini',
        description: 'An eye-catching orange Lamborghini with top-tier speed and luxury.',
        price: 2000,
        img: url.origin + '/car-hire-images/orange-lamborghini.jpg',
        credit: 'Toni Zaat (Unsplash)',
        available: true,
      },
      {
        car: 'Grey Aston Martin',
        description: 'A sophisticated grey Aston Martin combining elegance with power.',
        price: 1500,
        img: url.origin + '/car-hire-images/grey-aston-martin.jpg',
        credit: 'Alexandru Ivanov (Unsplash)',
        available: true,
      },
      {
        car: 'White Bugatti',
        description: 'A luxurious white Bugatti known for its exceptional speed and design.',
        price: 3500,
        img: url.origin + '/car-hire-images/white-bugatti.jpg',
        credit: 'Flavien (username) (Unsplash)',
        available: true,
      },

      {
        car: 'Red Ferrari',
        description: 'A stunning red Ferrari that promises an exhilarating driving experience.',
        price: 1500,
        img: url.origin + '/car-hire-images/red-ferrari.jpg',
        credit: 'Molim Karbelaei (Unsplash)',
        available: true,
      },
    ],
    nice: [
      {
        car: 'Black Maserati',
        description: 'A stylish black Maserati offering luxury and high performance.',
        price: 1500,
        img: url.origin + '/car-hire-images/black-maserati.jpg',
        credit: 'Krysztof Kubicki (Unsplash)',
        available: true,
      },
      {
        car: 'Black Mercedes',
        description: 'A classy black Mercedes known for its comfort and advanced features.',
        price: 1500,
        img: url.origin + '/car-hire-images/black-mercedes.jpg',
        credit: 'Martin Katler (Unsplash)',
        available: false,
      },
      {
        car: 'Green Chevrolet',
        description: 'A vibrant green Chevrolet that blends style with reliable performance.',
        price: 1000,
        img: url.origin + '/car-hire-images/green-chevrolet.jpg',
        credit: 'Markus Spiske (Unsplash)',
        available: true,
      },
      {
        car: 'Orange Volks Wagon',
        description: 'A charming orange Volkswagen with a retro appeal and modern features.',
        price: 500,
        img: url.origin + '/car-hire-images/orange-volks-wagon.jpg',
        credit: 'Oli Woodman (Unsplash)',
        available: true,
      },
      {
        car: 'Black MG',
        description: 'A classic black MG known for its elegant design and smooth ride.',
        price: 1000,
        img: url.origin + '/car-hire-images/black-mg.jpg',
        credit: 'Robin Vet (Unsplash)',
        available: true,
      },
    ],
  }

  let response = json(cars)
  response.headers.set('Access-Control-Allow-Origin', '*')
  return response
}
