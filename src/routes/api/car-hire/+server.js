import { json } from '@sveltejs/kit'

export function GET({ url }) {
  const cars = {
    fast: [
      {
        car: 'Black Lamborghini',
        description: '',
        price: 1500,
        img: url.href + '-images/black-lamborghini.jpg',
        credit: 'Adrian N (Unsplash)',
      },
      {
        car: 'Orange Lamborghini',
        description: '',
        price: 1500,
        img: url.href + '-images/orange-lamborghini.jpg',
        credit: 'Toni Zaat (Unsplash)',
      },
      {
        car: 'Grey Aston Martin',
        description: '',
        price: 1500,
        img: url.href + '-images/grey-aston-martin.jpg',
        credit: 'Alexandru Ivanov (Unsplash)',
      },
      {
        car: 'White Bugatti',
        description: '',
        price: 1500,
        img: url.href + '-images/white-bugatti.jpg',
        credit: 'Flavien (username) (Unsplash)',
      },

      {
        car: 'Red Ferrari',
        description: '',
        price: 1500,
        img: url.href + '-images/red-ferrari.jpg',
        credit: 'Molim Karbelaei (Unsplash)',
      },
    ],
    nice: [
      {
        car: 'Black Maserati',
        description: '',
        price: 1500,
        img: url.href + '-images/black-maserati.jpg',
        credit: 'Krysztof Kubicki (Unsplash)',
      },
      {
        car: 'Black Mercedes',
        description: '',
        price: 1500,
        img: url.href + '-images/black-mercedes.jpg',
        credit: 'Martin Katler (Unsplash)',
      },
      {
        car: 'Green Chevrolet',
        description: '',
        price: 1500,
        img: url.href + '-images/green-chevrolet.jpg',
        credit: 'Markus Spiske (Unsplash)',
      },

      {
        car: 'Orange Volks Wagon',
        description: '',
        price: 1500,
        img: url.href + '-images/orange-volks-wagon.jpg',
        credit: 'Oli Woodman (Unsplash)',
      },
      {
        car: 'Black MG',
        description: '',
        price: 1500,
        img: url.href + '-images/black-mg.jpg',
        credit: 'Robin Vet (Unsplash)',
      },
    ],
  }

  let response = json(cars)
  response.headers.set('Access-Control-Allow-Origin', '*')
  return response
}
