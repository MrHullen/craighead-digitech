<script>
  import Hero from '$lib/Hero.svelte'
  import Tiles from '$lib/Tiles.svelte'

  const tiles = [
    { title: 'Setup', icon: 'fas fa-laptop-code', iconColor: 'limegreen', target: 'coding/setup' },
    { title: 'Vocabulary', icon: 'fas fa-comment-dots', iconColor: 'dodgerblue', target: 'coding/vocabulary' },
    { title: 'Flow', icon: 'fas fa-route', iconColor: '', target: 'coding/flow' },
    { title: 'Projects', icon: 'fas fa-hard-hat', iconColor: 'orange', target: 'coding/projects' },
    { title: 'Common tasks', icon: 'fas fa-redo-alt', iconColor: 'hotpink', target: 'coding/common-tasks' },
  ]
</script>

<Hero title="Coding" subtitle="Building your outcome the way you want" />

<section class="content section">

  <Tiles tiles={tiles} />

</section>