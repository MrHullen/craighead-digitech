<script>
  import Hero from '$lib/Hero.svelte'
  import Tiles from '$lib/Tiles.svelte'

  const tiles = [
    { title: 'HTML and CSS', icon: 'fas fa-code', iconColor: 'tomato', target: '/html-css' },
    { title: 'JavaScript', icon: 'fa-brands fa-js', iconColor: 'gold', target: '/javascript' },
    { title: 'Svelte', icon: 'fas fa-hard-hat', iconColor: 'orange', target: '/svelte' },
  ]
</script>

<Hero title="Projects" subtitle="Some small projects to build your skills" />

<main class="content section">

  <Tiles tiles={tiles} />

</main>

