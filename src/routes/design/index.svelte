<script>
  import Hero from '$lib/Hero.svelte'
  import Tiles from '$lib/Tiles.svelte'

  const tiles = [
    { title: 'Empathise', icon: 'fa-solid fa-comments', iconColor: '#33C5FF', target: '/empathise' },
    { title: 'Ideate', icon: 'fa-solid fa-lightbulb', iconColor: '#E0607E', target: '/ideate' },
    { title: 'Prototype', icon: 'fa-solid fa-hammer', iconColor: '#32965D', target: '/prototype' },
    { title: 'Iterate', icon: 'fa-solid fa-arrows-rotate', iconColor: '#E9FF70', target: '/iterate' },
    { title: 'Reflect', icon: 'fa-solid fa-magnifying-glass', iconColor: '#FF7700', target: '/reflect' },    
  ]
</script>

<Hero title="Design" subtitle="Making your outcomes pleasant to use" />

<main class="content section">

  <Tiles tiles={tiles} />

</main>