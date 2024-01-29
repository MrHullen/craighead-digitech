import { json } from '@sveltejs/kit'

export function GET({ url }) {
  const products = {
    walls: [
      {
        name: 'Brick wall painted white',
        img: url.href + '-images/white-brick.jpg',
        price: 14.9,
      },
      {
        name: 'Brick wall painted pink',
        img: url.href + '-images/pink-brick.jpg',
        price: 19.9,
      },
      {
        name: 'Unpainted brick wall',
        img: url.href + '-images/unpainted-brick.jpg',
        price: 9.9,
      },
      {
        name: 'Plaster wall painted orange',
        img: url.href + '-images/orange-plaster.jpg',
        price: 11.9,
      },
      {
        name: 'Run-down wall painted yellow',
        img: url.href + '-images/yellow-run-down.jpg',
        price: 4.9,
      },
      {
        name: 'Run-down wall painted grey',
        img: url.href + '-images/grey-run-down.jpg',
        price: 4.9,
      },
      {
        name: 'Run-down wall painted tan',
        img: url.href + '-images/tan-run-down.jpg',
        price: 4.9,
      },
      {
        name: 'Really rough wall',
        img: url.href + '-images/rough.jpg',
        price: 4.9,
      },
      {
        name: 'Wall with flowers',
        img: url.href + '-images/flowers.jpg',
        price: 24.9,
      },
      {
        name: 'Art-deco wall',
        img: url.href + '-images/art-deco.jpg',
        price: 34.9,
      },
    ],
  }

  let response = json(products)
  response.headers.set('Access-Control-Allow-Origin', '*')
  return response
}
